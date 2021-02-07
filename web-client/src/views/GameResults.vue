<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Time over, game finished!
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around game-height">
      <game-results-card :players-score="playersScore"></game-results-card>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import GameResultsCard from '../components/game/GameResultsCard.vue';

export default Vue.extend({
  name: 'GameResults',
  props: [
    'correctAnswers',
    'playersAnswers',
  ],
  components: {
    GameResultsCard,
  },
  data() {
    return {
      playersScore: [],
      roomId: this.$route.params.gameId,
      playerScore: {} as {player: number; score: number},
    };
  },
  async mounted() {
    await this.generateScore();
    await this.updatePlayerScore();
  },
  methods: {
    generateScore() {
      const playersScore: {player: number; score: number}[] = [];
      for (let i = 0; i < this.playersAnswers.length; i += 1) {
        let score = 0;
        for (let j = 0; j < this.correctAnswers.length; j += 1) {
          if (this.playersAnswers[i][j].answer === this.correctAnswers[j]) {
            score += 1;
          }
        }
        const player = {
          player: i,
          score,
        };
        playersScore.push(player);
      }
      // eslint-disable-next-line prefer-destructuring
      this.playerScore = playersScore[0];
    },
    async updatePlayerScore() {
      const { username } = this.$route.query;
      const { score } = this.playerScore;
      const res: { data: { playersRoom: {}; scores: [] } } = await axios.post(`http://localhost:3000/room/close/${this.roomId}`, { username, score });
      this.playersScore = res.data.scores;
    },
  },
});
</script>
