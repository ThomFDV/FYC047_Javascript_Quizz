<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full flex flex-column justify-space-around"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column">
        <h2 class="text-3xl mx-auto my-2">Players in this room - {{ playersNb }}</h2>
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
          Start
        </v-btn>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'GameInfoCard',
  data() {
    return {
      roomId: this.$route.params.gameId,
      roomInfo: {} as any,
      players: [] as any[],
      playersNb: 1,
      theme: null,
    };
  },
  async mounted() {
    await this.getRoomData();
    this.theme = this.roomInfo.test.theme.name;
    this.addPlayers();
    if (this.players.length > 0 && this.players[0].username !== this.$route.query.username) {
      await this.joinRoom();
    }
  },
  methods: {
    async getRoomData() {
      const room = await axios.get(`http://localhost:3000/room/${this.roomId}`);
      this.roomInfo = room.data;
    },
    async joinRoom() {
      const room = await axios.post(`http://localhost:3000/room/join/${this.roomId}`, { username: this.$route.query.username });
      this.roomInfo.users.push(room.data);
      this.players.push(room.data);
    },
    addPlayers() {
      this.roomInfo.users.forEach((user: any) => {
        // eslint-disable-next-line no-param-reassign
        user.isOwner = this.roomInfo.owner === user.id;
        this.players.push(user);
      });
    },
  },
});
</script>
