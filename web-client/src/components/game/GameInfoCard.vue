<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full flex flex-column justify-space-around"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column">
        <h2 class="text-3xl mx-auto my-2">Players in the game - {{ playersNb }}</h2>
        <v-progress-linear
          indeterminate
          color="info"
          rounded
          height="4"
          class="mt-2 w-1/2"
        ></v-progress-linear>
      </v-card-title>
      <ul class="flex flex-md-wrap justify-lg-space-around col-sm-8 col-md-6 mx-auto">
        <li
          v-for="player in players"
          :key="player.id"
          class="mx-4 my-2 text-2xl text-accent align-self-center"
        >
          {{ player.username }}{{ player.isOwner ? ` (owner)` : ''}}
        </li>
      </ul>
      <div class="text-center my-4">
        <h3 class="text-2xl" v-if="theme">Quiz Theme: {{ this.theme }}</h3>
        <h3 class="text-2xl">Game ID: {{ this.roomId }}</h3>
        <v-btn
          color="primary"
          class="mx-auto my-4"
          raised
          elevation="4"
          :to="`/game/${this.roomId}/playing`"
        >
<!--          @click="redirectUsers"-->
          Start
        </v-btn>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
/* eslint-disable max-len */

import Vue from 'vue';
// import Pusher from 'pusher-js';
import axios from 'axios';

export default Vue.extend({
  name: 'GameInfoCard',
  data() {
    return {
      roomId: this.$route.params.gameId,
      // TODO: decouper en plusieurs variables avec leurs bons types
      roomInfo: {} as any,
      players: [] as any[],
      // player: '',
      playersNb: 1,
      theme: null,
      channel: null as any,
    };
  },
  async mounted() {
    await this.getRoomData();
    this.addPlayers();
    this.theme = this.roomInfo.test.theme.name;
  },
  methods: {
    async getRoomData() {
      const room = await axios.get(`http://localhost:3000/room/${this.roomId}`);
      this.roomInfo = room.data;
    },
    addPlayers() {
      this.roomInfo.users.forEach((user: any) => {
        // eslint-disable-next-line no-param-reassign
        user.isOwner = this.roomInfo.owner === user.id;
        this.players.push(user);
      });
    },
  },
  /*
  async created() {
    await this.subscribe();
    await this.getRoomInfo();
    await this.connectPlayer();
    this.isGameStarted();
  },
  computed: {
    players() {
      const roomInfo = {
        uuid: this.roomId,
        player: this.player,
      };
      this.$store.commit('findOrCreateRoomPlayers', roomInfo);
      return this.$store.state.roomsPlayers[this.$store.state.roomIndex].players;
    },
  },
  methods: {
    async subscribe() {
      Pusher.logToConsole = true;
      const pusher = new Pusher('18a55f14dc5416afff3d', {
        cluster: 'eu',
      });

      this.channel = pusher.subscribe('my-channel');

      // eslint-disable-next-line max-len
      // eslint-disable-next-line max-len
      this.channel.bind('my-event', (data: { room: { roomId: string; players: [{ name: string; role: string }]}}) => {
        console.log('%cReady to receive messages ! Here is on of them:', 'color:#00a9f7;');
        console.log(data);
        console.log('%cEnding there', 'color:#00a9f7;');
        this.$store.commit('addPlayer', data.room);
        console.log(this.players);
      });
    },
    async getRoomInfo() {
      const room = await axios.get(`http://localhost:3000/room/${this.roomId}`);
      this.roomInfo = room.data;
    },
    async connectPlayer() {
      await axios.post(`http://localhost:3000/room/${this.roomId}`,
        {
          name: this.player,
        });
    },
    redirectUsers() {
      this.$store.commit('startRoom', { roomId: this.roomId });
      console.log('%cStarted rooms:', 'colors: lightpink;');
      console.log(this.$store.state.startedRooms);
      this.$forceUpdate();
      // this.$emit('play-game', this.roomId);
    },
    isGameStarted() {
      if (this.$store.state.startedRooms.includes(this.roomId)) {
        this.$router.push('/game/1337-9834-3445/playing');
      }
    },
  },
  beforeDestroy() {
    // Retirer un player
  }
  */
});
</script>
