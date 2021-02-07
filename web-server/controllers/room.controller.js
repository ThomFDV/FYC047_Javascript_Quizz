'use strict';

const models = require('../models');
const pusher = require('../config/pusher');
const Sequelize = require('../models').sequelize;

const players = [];

class RoomController {

    async getRoom(id) {
        const roomData = await models.room.findByPk(id, {
            include: [
                {
                    model: models.test,
                    include: [
                        {
                            model: models.question,
                            as: 'questions',
                            include: [
                                {
                                    model: models.answer,
                                    as: 'answers'
                                }
                            ]
                        },
                        {
                            model: models.theme
                        }
                    ]
                },
                {
                    model: models.user
                }
            ]
        });
        return roomData;
    };

    async getRooms() {
        return models.room.findAll();
    };

    async addRoom(name, username, testId) {
        console.log("%c\n==========\n", "color: lightblue;");
        const player = await models.user.findOne({ where: { username }});
        console.log("%c\n==========\n", "color: lightblue;");
        console.log(player);
        console.log("%c\n==========\n", "color: lightblue;");
        if (!player) return;

        const createdRoom = await models.room.create({
            name,
            owner: player.id,
            testId
        });
        console.log("%c\n==========\n", "color: lightblue;");
        console.log(createdRoom);
        console.log("%c\n==========\n", "color: lightblue;");
        if (!createdRoom) return;

        const updatePlayer = await models.user.update({ isPlaying: true }, { where: { id: player.id } });
        console.log("%c\n==========\n", "color: lightblue;");
        console.log(updatePlayer);
        console.log("%c\n==========\n", "color: lightblue;");
        if (!updatePlayer) return;

        return models.user_room.create({ userId: player.id, roomId: createdRoom.id, score: 0 });

    };

    async connectPlayerToRoom(id, username) {
        const roomFound = await models.room.findByPk(id);
        const player = await models.user.findOne({ where: { username }});
        if (player.isPlaying) {
            const playerRoom = await models.user_room.findOne({ where: { userId: player.id, roomId: roomFound.id }});
            if (!playerRoom) throw "User playing in another room";
            return;
        }
        await models.user.update({ isPlaying: true }, { where: { id: player.id } });
        const addedPlayer = await models.user_room.create({ userId: player.id, roomId: roomFound.id, score: 0 });
        const roomIndex = players.findIndex(room => room.roomId === id);
        console.log(`%cFound: ${roomIndex} in :`, 'color: lightblue;');
        console.log(players);
        if (roomIndex !== -1) {
            players[roomIndex].players.push({ name: player, role: 'guest' });
        } else {
            players.push({ roomId: id, players: [{ name: player, role: 'owner' }] });
        }
        const room = players.find(room => room.roomId === id);
        await pusher.trigger("my-channel", "my-event", {
            room
        });
        return addedPlayer;
    };

    async closeRoom(roomId, username, score) {
        // const player = await models.user.findOne({ where: { username }});

        console.log("\n\n\n");

        const playersRoom = await models.room.findByPk(roomId, {
            include: [
                {
                    model: models.user
                }
            ]
        });

        let playerToBeUpdated;
        const scores = [];

        for (let i = 0; i < playersRoom.users.length; i++) {
            if (playersRoom.users[i].username === username) {
                playerToBeUpdated = playersRoom.users[i];
                scores.push({ playerUsername: username, score });
            } else {
                scores.push({ playerUsername: playersRoom.users[i].username, score: playersRoom.users[i].user_room.score });
            }
        }

        await playerToBeUpdated.update({ isPlaying: false });
        await playerToBeUpdated.user_room.update({ score })

        return { playersRoom, scores };
    }
}

module.exports = new RoomController();
