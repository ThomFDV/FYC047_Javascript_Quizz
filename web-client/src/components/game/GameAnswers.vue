<template>
  <section>
    <ul class="flex flex-wrap">
      <li
        v-for="answer in answers"
        :key="answer.id"
        class="w-1/2 flex justify-center my-4"
      >
        <v-btn outlined color="accent">
          {{ answer.text }}
        </v-btn>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameAnswers',
  data() {
    return {
      answers: [
        {
          id: 0,
          text: 'Thomas FERREIRA',
          isRight: false,
        },
        {
          id: 1,
          text: 'Corentin MARTINEZ',
          isRight: false,
        },
        {
          id: 2,
          text: 'Elise ALLIROL',
          isRight: true,
        },
        {
          id: 3,
          text: 'Romain BOILLEAU',
          isRight: false,
        },
      ],
    };
  },
});
</script>
