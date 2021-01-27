<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>QUIZ Game</ion-title>
      </ion-toolbar>
    </ion-header> 
    
    <ion-content :fullscreen="true">
        <ion-item lines="none">
            <h1> Playing Time ! </h1>
        </ion-item>

      <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Anwers the best you can</ion-card-subtitle>
          <ion-card-title>{{ quizQuestions[step] }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>

            <ion-radio-group name="answers" :value="radioValue" v-on:ionChange="radioValue = $event.target.value">
                <ion-item v-for="(answer, index) in quizAnswers[step]" :key="index">
                    <ion-label>{{ answer }}</ion-label>
                    <ion-radio :value="index"></ion-radio>
                </ion-item>
            </ion-radio-group>
            
        </ion-card-content>
      </ion-card>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button v-on:click="nextQuestion" expand="block" color="primary">
          Next Question
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { GameService } from '../services/game.service';

// should display infos

export default defineComponent({
  name: 'Game',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  mounted() {
      this.populateForTest();
  },
  data() {
    return {
      GameService,
      quizQuestions: [''],
      quizAnswers: [['']],
      selectedAnswers: [{}],
      questionsNbr: 0,
      step: 0,
      radioValue: null
    };
  },
  methods: {
    populateForTest() {
        const question = ['Quel est la date du premier lancement Nucléaire ?', 'De quelle couleur est une rose ?'];
        const answers = [['6 août 1945', '9 août 1945', '11 septembre 2001', '13 novembre 2014'], ['Rose', 'Rouge', 'Blanc', 'Jaune']];
        this.quizAnswers = answers;
        this.quizQuestions = question;
        this.questionsNbr = question.length
    },
    // todo be sure user selected one value
    nextQuestion() {
        if (this.radioValue) {
            console.log(this.radioValue);
            this.radioValue = null
            this.step++;
        }
    }

  }
});
</script>