<template>
  <div>
    <h3 class="text-secondary text-3xl font-weight-medium text-center my-4">
      Ready to play?
    </h3>
    <div class="flex flex-column flex-sm-row justify-sm-space-around mt-4">
      <v-btn
        color="primary"
        class="my-2 my-sm-0"
        @click="nextStep(false)"
      >
        Join a Game
      </v-btn>
      <v-btn
        color="primary"
        class="my-2 my-sm-0"
        @click="nextStep(true)"
      >
        Create a Game
      </v-btn>
    </div>
    <div class="flex justify-center mt-2 mb-4">
      <v-btn color="primary">
        See the Rules
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSelectorStepper',
  data() {
    return {};
  },
  methods: {
    nextStep(isCreating) {
      this.$emit('next-step', isCreating);
    },
  },
};
</script>
