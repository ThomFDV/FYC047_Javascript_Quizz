<template>
  <section class="my-4 my-sm-8 my-lg-16">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Waiting for the host to launch the game
    </h1>
    <div class="flex flex-column flex-sm-row my-6 justify-space-around">
      <game-info-card></game-info-card>
      <game-chat></game-chat>
    </div>
  </section>
</template>

<script>
import GameInfoCard from '../components/game/GameInfoCard.vue';
import GameChat from '../components/game/GameChat.vue';

export default {
  name: 'GameHome',
  components: { GameChat, GameInfoCard },
  data() {
    return { };
  },
};
</script>
