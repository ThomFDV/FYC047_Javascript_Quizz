<template>
  <section class="my-4 my-sm-6 my-lg-8">
    <h1 class="text-4xl font-weight-bold text-center text-secondary">
      Playing Time! Answer the best you can!
    </h1>
    <div class="flex flex-column flex-sm-row justify-space-around game-height">
      <game-questions
        :questions-nbr="totalQuestionsNbr"
        :quiz-questions="quizQuestions"
        @quiz-end="gameEnd"
      >
        <template
          v-for="question in totalQuestionsNbr"
          v-slot:[`question-${question}`]
        >
          <game-answers
            :key="question"
            :questions-answers="quizAnswers[question - 1]"
            :question-index="question - 1"
            @send-answer="updateAnswers"
          ></game-answers>
        </template>
      </game-questions>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import GameQuestions from '../components/game/GameQuestions.vue';
import GameAnswers from '../components/game/GameAnswers.vue';

export default Vue.extend({
  name: 'PlayingGame',
  components: {
    GameQuestions,
    GameAnswers,
  },
  data() {
    return {
      totalQuestionsNbr: 1,
      quizQuestions: [''],
      quizAnswers: [['']],
      quizCorrectAnswers: [] as string[],
      selectedAnswers: [{}],
    };
  },
  methods: {
    getQuiz() {
      return axios.get(`http://localhost:3000/room/${this.$route.params.gameId}`);
    },
    updateAnswers(answer: { question: number; answer: number }) {
      if (this.selectedAnswers[answer.question]) {
        this.selectedAnswers[answer.question] = answer;
      } else {
        this.selectedAnswers.push(answer);
      }
    },
    gameEnd() {
      this.$router.push({
        path: `/game/${this.$route.params.gameId}/results`,
      });
      // ! selectedAnswers contains a void array at the first position
      this.$emit('game-finished', this.quizCorrectAnswers, this.selectedAnswers);
    },
    sortQuizData(quizData: any) {
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
        console.log(allAnswers);
        const emptyAnswer = {
          question: index,
          answer: '',
        };
        emptyAnswers.push(emptyAnswer);
        index += 1;
        this.quizCorrectAnswers.push(answers[0]);
      }
      this.totalQuestionsNbr = questions.length;
      this.quizQuestions = questions;
      this.quizAnswers = allAnswers;
      this.selectedAnswers = emptyAnswers;
      console.log(this.quizQuestions);
      console.log(this.quizAnswers);
    },
  },
  async mounted() {
    const quizData = await this.getQuiz();
    console.log(quizData);
    this.sortQuizData(quizData.data);
  },
});
</script>
