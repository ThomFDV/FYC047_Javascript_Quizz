<template>
  <section class="my-4 my-sm-8 my-lg-16">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Waiting for the host to launch the game
    </h1>
    <v-card
    color="secondary"
    dark
    class="col-11 col-sm-10 col-md-8 mx-auto my-6"
    >
      <v-card-title class="flex-column">
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
          {{ player.name }}
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
  name: 'GameHome',
  data() {
    return {
      players: [
        {
          name: 'TotoLeDozoDu93',
        },
        {
          name: 'TataLaDozo',
        },
        {
          name: 'Tutu',
        },
        {
          name: 'Titi',
        },
        {
          name: 'Tete',
        },
        {
          name: 'Tyty',
        },
      ],
    };
  },
};
</script>
