<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full flex flex-column justify-space-around"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column">
        <h2 class="text-3xl mx-auto my-2">Players in the game</h2>
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
          :key="player.name"
          class="mx-4 my-2 text-2xl text-accent align-self-center"
        >
          {{ player.name }}{{ player.role === 'owner' ? ` (${player.role})` : ''}}
        </li>
      </ul>
      <div class="text-center my-4">
        <h3 class="text-2xl">Quiz Theme: Random</h3>
        <h3 class="text-2xl">Game ID: 1337-9834-3445</h3>
        <v-btn
          color="primary"
          class="mx-auto my-4"
          raised
          elevation="4"
          to="/game/1337-9834-3445/playing"
        >
          Start
        </v-btn>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameInfoCard',
  data() {
    return {
      players: [
        {
          name: 'Toto',
          role: 'owner',
        },
        {
          name: 'Tata',
          role: 'guest',
        },
        {
          name: 'Tutu',
          role: 'guest',
        },
        {
          name: 'Titi',
          role: 'guest',
        },
        {
          name: 'Tete',
          role: 'player',
        },
        {
          name: 'Tyty',
          role: 'guest',
        },
      ],
    };
  },
});
</script>
