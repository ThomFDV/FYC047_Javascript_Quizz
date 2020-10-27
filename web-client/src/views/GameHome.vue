<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Waiting for the host to launch the game
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around ">
      <game-info-card></game-info-card>
    </div>
  </section>
</template>

<script>
import GameInfoCard from '../components/game/GameInfoCard.vue';

export default {
  name: 'GameHome',
  components: { GameInfoCard },
  data() {
    return { };
  },
};
</script>
