<template>
  <div class="home">
    <div class="my-4 my-sm-8 my-lg-16 mx-auto">
      <h1 class="text-4xl font-weight-bold text-center text-secondary">
        Welcome to our Quiz Game
      </h1>
      <main-stepper @is-creating="toggleForm">
        <template #firstStep="{ nextStep }">
          <form-selector-stepper @next-step="nextStep"></form-selector-stepper>
        </template>
        <template #secondStep="{ changeStep }">
          <GameFormsStepper
            @previous-step="changeStep"
            :create-form="isCreating"
          >
          </GameFormsStepper>
        </template>
      </main-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainStepper from '../components/MainStepper.vue';
import FormSelectorStepper from '../components/menu/FormSelectorStepper.vue';
import GameFormsStepper from '../components/menu/GameFormsStepper.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    MainStepper,
    FormSelectorStepper,
    GameFormsStepper,
  },
  data() {
    return {
      isCreating: false,
    };
  },
  methods: {
    toggleForm(creating: boolean) {
      this.isCreating = creating;
    },
  },
});
</script>
