<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-stepper
      v-model="displayedStep"
      class="mx-auto mt-6 bg-secondary"
      elevation="5"
      dark
    >
      <v-stepper-header>
        <v-stepper-step
          v-for="question in questionsNbr"
          :key="question"
          :complete="displayedStep > displayedStep + 1"
          :step="question"
        >
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content v-for="question in questionsNbr" :key="question" :step="question">
          <div class="flex flex-column align-center mb-8">
            <h2 class="text-3xl mx-auto my-4 text-info">{{ questionTitle }}</h2>
            <v-progress-linear
              color="info"
              rounded
              height="4"
              :value="progressBarValue"
              stream
              buffer-value="0"
              class="mt-2 w-1/2"
            ></v-progress-linear>
          </div>
          <slot></slot>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameQuestions',
  props: {
    questionsNbr: Number,
  },
  data() {
    return {
      displayedStep: 1,
      questionTitle: 'Quel personne ne fait pas partie du groupe FYC ?',
      progressBarValue: 0,
    };
  },
  watch: {
    progressBarValue() {
      if (this.progressBarValue < 100) {
        this.progress();
        return;
      }
      this.displayedStep += 1;
      this.progressBarValue = 0;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.progress();
    });
  },
  methods: {
    progress() {
      setTimeout(() => {
        this.progressBarValue += 5;
      }, 1000);
    },
  },
});
</script>
