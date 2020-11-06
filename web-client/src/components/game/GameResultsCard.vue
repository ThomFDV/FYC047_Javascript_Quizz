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
          <h3 class="text-3xl text-center text-accent">900</h3>
          <h4 class="text-2xl text-center">Toto</h4>
        </v-card>
        <v-card class="order-1 mt-14 mx-3 p-2" color="secondary darken-1" elevation="6">
          <img src="../../assets/second_place.png" width="150">
          <h3 class="text-3xl text-center text-accent">910</h3>
          <h4 class="text-2xl text-center">Toto</h4>
        </v-card>
        <v-card class="order-3 mt-14 mx-3 p-2" color="secondary darken-1" elevation="6">
          <img src="../../assets/third_place.png" width="150">
          <h3 class="text-3xl text-center text-accent">850</h3>
          <h4 class="text-2xl text-center">Toto</h4>
        </v-card>
      </div>
      <ul class="flex flex-wrap justify-space-around my-8">
        <li class="w-1/4">
          <v-badge content="4" class="mx-auto w-3/4" overlap left bordered>
            <v-card class="p-2" color="secondary darken-1" elevation="6">
              <h3 class="text-3xl text-center text-accent">800</h3>
              <h4 class="text-2xl text-center">Tata</h4>
            </v-card>
          </v-badge>
        </li>
        <li class="w-1/4">
          <v-badge content="4" class="mx-auto w-3/4" overlap left bordered>
            <v-card class="p-2" color="secondary darken-1" elevation="6">
              <h3 class="text-3xl text-center text-accent">800</h3>
              <h4 class="text-2xl text-center">Tutu</h4>
            </v-card>
          </v-badge>
        </li>
        <li class="w-1/4">
          <v-badge content="4" class="mx-auto w-3/4" overlap left bordered>
            <v-card class="p-2" color="secondary darken-1" elevation="6">
              <h3 class="text-3xl text-center text-accent">800</h3>
              <h4 class="text-2xl text-center">Titi</h4>
            </v-card>
          </v-badge>
        </li>
        <li class="w-1/4">
          <v-badge content="4" class="mx-auto w-3/4" overlap left bordered>
            <v-card class="p-2" color="secondary darken-1" elevation="6">
              <h3 class="text-3xl text-center text-accent">800</h3>
              <h4 class="text-2xl text-center">tyty</h4>
            </v-card>
          </v-badge>
        </li>
      </ul>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameResultsCard',
});
</script>

<style lang="scss">
.theme--dark.v-badge .v-badge__badge::after {
  border-color: var(--v-secondary-base) !important;
}
</style>
