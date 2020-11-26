<template>
  <section>
    <v-btn-toggle class="flex flex-wrap bg-secondary" v-model="selectedAnswer" group>
      <div
        v-for="answer in shuffledAnswers"
        :key="answer"
        class="w-1/2 flex justify-center my-4"
      >
        <v-btn color="accent" class="text-secondary" outlined>
          {{ answer }}
        </v-btn>
      </div>
    </v-btn-toggle>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameAnswers',
  props: {
    questionsAnswers: Array,
    questionIndex: Number,
  },
  data() {
    return {
      selectedAnswer: null,
      shuffledAnswers: [] as string[],
    };
  },
  watch: {
    selectedAnswer(val) {
      const obj = {
        question: this.questionIndex,
        answer: this.shuffledAnswers[val],
      };
      this.$emit('send-answer', obj);
    },
    questionsAnswers(val) {
      this.shuffleAnswers(val);
    },
  },
  async mounted() {
    await this.shuffleAnswers(this.questionsAnswers);
  },
  methods: {
    shuffleAnswers(answers: any[]) {
      const toShuffleAnswers: Array<any> = answers;
      for (let i = toShuffleAnswers.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temp: string = toShuffleAnswers[i];
        toShuffleAnswers[i] = toShuffleAnswers[j];
        toShuffleAnswers[j] = temp;
      }
      this.shuffledAnswers = toShuffleAnswers;
    },
  },
});
</script>
