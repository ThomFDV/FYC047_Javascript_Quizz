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
<script>
export default {
  name: 'TheHeader',
  props: {
    applicationName: String,
  },
};
</script>
