<template>
  <v-app style="background-color: inherit">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2 class="text-4xl">Quizz App</h2>
      </div>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
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
