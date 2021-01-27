'use strict';

const Room = require('../models').room;
const User = require('../models').user;
const UserRoom = require('../models').user_room;
const pusher = require('../config/pusher');
const Sequelize = require('../models').sequelize;

const players = [];

class RoomController {

    async getRoom(id) {
        return Room.findOne({
            where: {
                id
            }
        });
    };

    async getRooms() {
        return Room.findAll();
    };

    async addRoom(name, userId, testId) {
        const createdRoom = await Room.create({
            name,
            owner: userId,
            testId
        });
        if (!createdRoom) return;

        const player = await User.findByPk(userId);
        if (!player) return;

        const updatePlayer = await User.update({ isPlaying: true }, { where: { id: player.id } });
        if (!updatePlayer) return;

        return UserRoom.create({ userId: player.id, roomId: createdRoom.id, score: 0 });

    };

    async connectPlayerToRoom(id, player) {
        const roomIndex = players.findIndex(room => room.roomId === id)
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
    };

}

module.exports = new RoomController();
