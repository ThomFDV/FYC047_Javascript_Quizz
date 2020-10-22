<template>
  <v-app style="background-color: inherit">
    <the-header applicationName="Quiz Game"></the-header>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',

  components: {
    Home,
    TheHeader,
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
  background: #D2FDFF;
}
</style>
