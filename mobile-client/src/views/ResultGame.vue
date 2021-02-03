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
                        <ion-card-title class="ion-text-center">10/10</ion-card-title>
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
import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/vue';
import { defineComponent, resolveDirective } from 'vue';
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
      GameService,
      quizQuestions: [''],
      quizAnswers: [['']],
      selectedAnswers: Array<number>(),
      questionsNbr: 0,
      step: 0,
      radioValue: -1
    };
  },
  methods: {
    backToHome() {
        this.$router.push('home');
    }
  }
});
</script>