<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column mb-sm-4 md-md-8">
        <h2 class="text-3xl mx-auto">Players in the game</h2>
        <v-progress-linear
          indeterminate
          color="info"
          rounded
          height="4"
          class="mt-2 w-1/2"
        ></v-progress-linear>
      </v-card-title>
      <ul class="flex flex-lg-wrap justify-lg-space-around col-sm-10 col-md-8 mx-auto">
        <li v-for="player in players" :key="player.name" class="mx-4 my-2 text-2xl text-accent">
          {{ player.name }}{{ player.role === 'owner' ? ` (${player.role})` : ''}}
        </li>
      </ul>
      <div class="text-center mt-4">
        <h3 class="text-2xl">Quiz Theme: Random</h3>
        <h3 class="text-2xl">Game ID: 1337-9834-3445</h3>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
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
};
</script>
