<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
<!--      <v-img-->
<!--        alt="Vuetify Logo"-->
<!--        class="shrink mr-2"-->
<!--        contain-->
<!--        src="../assets/GuessAll_Logo.png"-->
<!--        transition="scale-transition"-->
<!--        width="60"-->
<!--      />-->
      <h2 class="text-4xl">{{ applicationName }}</h2>
    </div>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheHeader',
  props: {
    applicationName: String,
  },
});
</script>
