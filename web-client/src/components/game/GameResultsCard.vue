<template>
  <section class="col-11 col-sm-10 col-md-8">
    <v-card
      class="h-full flex flex-column"
      color="secondary"
      dark
    >
      <v-card-title class="flex-column">
        <h2 class="text-3xl mx-auto my-2">Let's see who's the best</h2>
      </v-card-title>
      <div class="flex flex-initial justify-center">
        <v-card class="order-2 mb-14 mx-3 p-2" color="secondary darken-1" elevation="6">
          <img src="../../assets/first_place.png" width="150">
          <h3 class="text-3xl text-center text-accent">{{this.playersScore[0].score}}</h3>
          <h4 class="text-2xl text-center">{{this.playersScore[0].playerUsername}}</h4>
        </v-card>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameResultsCard',
  props: {
    playersScore: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.theme--dark.v-badge .v-badge__badge::after {
  border-color: var(--v-secondary-base) !important;
}
</style>
