<template>
  <section>
    <v-btn-toggle class="flex flex-wrap bg-secondary" v-model="selectedAnswer" group>
      <div
        v-for="answer in questionsAnswers"
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
    };
  },
  watch: {
    selectedAnswer(val) {
      const obj = {
        question: this.questionIndex,
        answer: val,
      };
      this.$emit('send-answer', obj);
    },
  },
  mounted() {
    this.shuffleAnswers();
  },
  methods: {
    shuffleAnswers() {
      for (let i = this.questionsAnswers.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temp = this.questionsAnswers[i];
        this.questionsAnswers[i] = this.questionsAnswers[j];
        this.questionsAnswers[j] = temp;
      }
    },
  },
});
</script>
