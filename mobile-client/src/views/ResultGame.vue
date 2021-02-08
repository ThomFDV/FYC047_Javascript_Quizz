<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>QUIZ Game</ion-title>
      </ion-toolbar>
    </ion-header> 
    
    <ion-content :fullscreen="true">
        <ion-header collapse="condense">
            <ion-toolbar>
            <ion-title size="large">QUIZ Game</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-card>
            <ion-card-header>
                <ion-card-subtitle>End Of Quizz</ion-card-subtitle>
                <ion-card-title>Results</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-card color="danger">
                    <ion-card-header>
                        <ion-card-title class="ion-text-center">{{ playerScore.score }}</ion-card-title>
                    </ion-card-header>
                </ion-card>
            </ion-card-content>
        </ion-card>

      
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button v-on:click="backToHome" expand="block" color="primary">
          Back To Home
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { GameService } from '../services/game.service';

// should display infos

export default defineComponent({
  name: 'ResultGame',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle
  },
  data() {
    return {
      playerScores: [],
      playerScore: {} as {player: number; score: number}
    };
  },
  mounted() {
    this.generateScore();
  },
  methods: {

    backToHome() {
        this.$router.push('home');
    },
    generateScore() {
      const playersScore: {player: number; score: number} = { player: 0, score: 0 };
      for (let i = 0; i < GameService.gameInfo.selectedAnswers.length; i += 1) {
        for (let j = 0; j < GameService.gameInfo.correctAnswers.length; j += 1) {
          console.log(GameService.gameInfo.selectedAnswers[i].answer);
          console.log("correct" + GameService.gameInfo.correctAnswers[j]);
          if (GameService.gameInfo.selectedAnswers[i].answer === GameService.gameInfo.correctAnswers[j] && GameService.gameInfo.selectedAnswers[i].question === j) {
            playersScore.score += 1;
          }
        }
      }
      // eslint-disable-next-line prefer-destructuring
      this.playerScore = playersScore;
    }
  }
});
</script>