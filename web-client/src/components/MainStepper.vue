<template>
  <v-stepper
    v-model="displayedStep"
    class="col-11 col-sm-10 col-md-8 mx-auto mt-6 bg-info bg-opacity-75"
    elevation="5"
  >
    <v-stepper-header>
      <v-stepper-step
        :complete="displayedStep > 1"
        step="1"
      >
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="displayedStep > 2"
        step="2"
      >
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <slot name="firstStep" :next-step="nextStep">
          Please add content in the slot from the parent component.
        </slot>
      </v-stepper-content>

      <v-stepper-content step="2">
        <slot :change-step="updateStep" name="secondStep">
          Please add content in the slot from the parent component.
        </slot>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainStepper',
  data() {
    return {
      displayedStep: 1,
      isCreating: false,
    };
  },
  methods: {
    nextStep(isCreating: boolean) {
      this.displayedStep = 2;
      this.isCreating = isCreating;
      this.$emit('is-creating', isCreating);
    },
    updateStep(num: number) {
      this.displayedStep = num;
    },
  },
});
</script>
