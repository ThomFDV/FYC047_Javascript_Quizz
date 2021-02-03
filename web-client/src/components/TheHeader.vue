<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <h2 class="text-4xl">{{ applicationName }}</h2>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn v-if="!isUserAuthenticated" color="secondary" to="/register">Login</v-btn>
      <v-btn v-else color="secondary" @click="disconnect()">Login</v-btn>
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
  data() {
    return {
      isUserAuthenticated: false,
    };
  },
  methods: {
    disconnect() {
      // TODO
      // TODO
      // TODO
      // TODO
      // TODO
      // TODO
      return '';
    },
  },
  mounted() {
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
  },
});
</script>
