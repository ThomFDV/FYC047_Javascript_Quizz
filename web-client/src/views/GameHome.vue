<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Waiting for the host to launch the game
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around game-height">
      <game-info-card @play-game="goToPlayingGame"></game-info-card>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import GameInfoCard from '../components/game/GameInfoCard.vue';

export default Vue.extend({
  name: 'GameHome',
  components: { GameInfoCard },
  data() {
    return { };
  },
  methods: {
    goToPlayingGame(roomId: string) {
      if (this.$route.params.gameId === roomId) this.$router.push('/game/1337-9834-3445/playing');
    },
  },
});
</script>

<style lang="scss">
  .game-height {
    min-height: auto;

    @media (min-width: 768px) {
      min-height: 500px;
    }
  }
</style>
