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
        <ion-item>
            <h2>Question: {{ step + 1 }}/{{ questionsNbr }}</h2>
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
                    <ion-radio :value="answer"></ion-radio>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonItem, IonRadioGroup } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Answer, GameService } from '../services/game.service';

// should display infos

export default defineComponent({
  name: 'Game',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, 
    IonItem, 
    IonRadioGroup
  },
  mounted() {
      this.parseRoomInfo(GameService.roomInfo);
  },
  data() {
    return {
      quizQuestions: [''],
      quizAnswers: [['']],
      selectedAnswers: Array<Answer>(),
      quizCorrectAnswers: Array<string>(),
      questionsNbr: 0,
      step: 0,
      radioValue: ""
    };
  },
  methods: {
    populateForTest() {
        const question = ['Quel est la date du premier lancement Nucléaire ?', 'De quelle couleur est une rose ?'];
        const answers = [['6 août 1945', '9 août 1945', '11 septembre 2001', '13 novembre 2014'], ['Rose', 'Rouge', 'Blanc', 'Jaune']];
        this.quizAnswers = answers;
        this.quizQuestions = question;
        this.questionsNbr = question.length;
    },
    parseRoomInfo(quizData: any) {
      const questions = [];
      const allAnswers = [];
      const emptyAnswers: { question: number; answer: string }[] = [];
      let index = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const questionData of quizData.test.questions) {
        const answers = [];
        questions.push(questionData.content);
        answers.push(questionData.answers
          .filter((answer: any) => answer.isCorrect === true)[0].content);
        const wrongAnswers = [...questionData.answers
          .filter((answer: any) => answer.isCorrect === false)];
        wrongAnswers.forEach((answer) => answers.push(answer.content));
        allAnswers.push(answers);
        //console.log(allAnswers);
        const emptyAnswer = {
          question: index,
          answer: '',
        };
        emptyAnswers.push(emptyAnswer);
        index += 1;
        this.quizCorrectAnswers.push(answers[0]);
      }
      this.questionsNbr = questions.length;
      this.quizQuestions = questions;
      this.quizAnswers = allAnswers;
      this.selectedAnswers = emptyAnswers;

      // console.log(this.quizQuestions);
      // console.log(this.quizAnswers);
      // console.log(this.selectedAnswers);
      // console.log(this.quizCorrectAnswers);
    },
    // todo be sure user selected one value
    nextQuestion() {
        // console.log(this.radioValue);
        if (this.radioValue != "") {
            const answer: Answer = { question: this.step, answer: this.radioValue}

          if (this.selectedAnswers[answer.question]) {
            this.selectedAnswers[answer.question] = answer;
          } else {
            this.selectedAnswers.push(answer);
          }
            this.radioValue = "";

            this.step++;

            //console.log(`step: ${this.step}`);
            // console.log(`QuNbr: ${this.questionsNbr}`);
            
            if (this.step >= this.questionsNbr) {
                this.redirectToResult();
                console.log('End of test');
                return;
            }
            // console.log(this.selectedAnswers);
        }
    },
    redirectToResult() {
        GameService.gameInfo.selectedAnswers = this.selectedAnswers;
        GameService.gameInfo.correctAnswers = this.quizCorrectAnswers;
        this.$router.push('/result-game');
    }

  }
});
</script>