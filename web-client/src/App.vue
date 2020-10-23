<template>
  <v-app style="background-color: inherit">
    <the-header applicationName="Quiz Game"></the-header>
    <animated-background></animated-background>
    <v-main class="mt-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    AnimatedBackground,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

body {
  background: #FBE8A6;
}
#app {
  background: #FBE8A6;
  width: 100%;
  height: 100vh;
  padding-top: 60px;
}
</style>
