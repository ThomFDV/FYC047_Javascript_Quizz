<template>
  <v-app style="background-color: inherit">
    <the-header applicationName="Quiz Game"></the-header>
    <animated-background></animated-background>
    <v-main class="mt-3">
      <router-view
        @game-finished="getAnswers"
        :all-answers="gameAnswers"
        :players-answers="playerAnswers"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import io from 'socket.io-client';
import TheHeader from './components/TheHeader.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';

// const socket = io.connect('http://localhost:3000');
//
// socket.on('connect', () => {
//   console.log('Successfully connected!');
// });

export default Vue.extend({
  name: 'App',

  components: {
    TheHeader,
    AnimatedBackground,
  },

  data: () => ({
    gameAnswers: [] as Array<Array<string>>,
    playerAnswers: [] as object[],
  }),
  methods: {
    getAnswers(gameAnswers: Array<Array<string>>, answers: any) {
      this.gameAnswers = gameAnswers;
      this.playerAnswers.push(answers);
    },
  },
});
</script>

<style>
  @import "tailwindcss/base";

  @import "tailwindcss/components";

  @import "tailwindcss/utilities";

  body {
    background: #FBE8A6;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  #app {
    background: #FBE8A6;
    width: 100%;
    height: 100vh;
    padding-top: 60px;
  }
</style>
