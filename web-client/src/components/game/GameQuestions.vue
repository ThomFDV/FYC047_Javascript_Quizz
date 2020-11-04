<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full flex flex-column py-6"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column mb-8">
        <h2 class="text-3xl mx-auto my-4">{{ questionTitle }}</h2>
        <v-progress-linear
          indeterminate
          color="info"
          rounded
          height="4"
          class="mt-2 w-1/2"
        ></v-progress-linear>
      </v-card-title>
      <slot></slot>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameQuestions',
  data() {
    return {
      questionTitle: 'Quel personne ne fait pas partie du groupe FYC ?',
    };
  },
});
</script>
