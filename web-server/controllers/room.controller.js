'use strict';

const Room = require('../models').room;
const pusher = require('../config/pusher');

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

    async addRoom(roomName, playerId) {
        console.log(`Room created by user: ${playerId}`);
        return Room.create({
            name: roomName,
            User_id: playerId
        });
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
