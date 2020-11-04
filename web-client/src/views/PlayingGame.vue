<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Playing Time! Answer the best you can!
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around game-height">
      <game-questions>
        <game-answers></game-answers>
      </game-questions>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import GameQuestions from '../components/game/GameQuestions.vue';
import GameAnswers from '../components/game/GameAnswers.vue';

export default Vue.extend({
  name: 'PlayingGame',
  components: {
    GameQuestions,
    GameAnswers,
  },
});
</script>
