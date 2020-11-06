<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Time over, game finished!
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around game-height">
      <game-results-card></game-results-card>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import GameResultsCard from '../components/game/GameResultsCard.vue';

export default Vue.extend({
  name: 'GameResults',
  components: {
    GameResultsCard,
  },
});
</script>
