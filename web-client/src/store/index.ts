import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomsPlayers: [] as { roomId: string; players: {name: string; role: string}[]}[],
    roomIndex: -1,
    startedRooms: [] as string[],
  },
  mutations: {
    findOrCreateRoomPlayers(state, payload) {
      let roomIndex;
      roomIndex = state.roomsPlayers.findIndex((room) => room.roomId === payload.uuid);
      if (roomIndex === -1) {
        state.roomsPlayers.push({ roomId: payload.uuid, players: [{ name: payload.player, role: 'owner' }] });
      }
      roomIndex = state.roomsPlayers.findIndex((room) => room.roomId === payload.uuid);
      state.roomIndex = roomIndex;
    },
    addPlayer(state, payload) {
      const roomIndex = state.roomsPlayers.findIndex((room) => room.roomId === payload.roomId);
      if (roomIndex !== -1) {
        Vue.set(state.roomsPlayers, roomIndex, payload);
      }
    },
    startRoom(state, payload) {
      state.startedRooms.push(payload.roomId);
    },
  },
  actions: {
  },
  modules: {
  },
});
