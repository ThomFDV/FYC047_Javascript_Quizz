<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
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
