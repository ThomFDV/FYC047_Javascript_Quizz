<template>
  <div>
    <v-form
      v-if="!createForm"
      class="flex justify-center"
      ref="createFormRef"
      v-model="joinGameForm"
      lazy-validation
    >
      <v-text-field
        class="col-7 my-2"
        v-model="gameId"
        label="Game ID"
        color="primary"
        outlined
        required
        hide-details
      ></v-text-field>

      <v-btn
        :disabled="!joinGameForm"
        color="primary"
        class="ml-2 my-auto"
        @click="joinGame"
      >
        Join
      </v-btn>
    </v-form>

    <v-form
      v-else
      class="flex justify-center"
      ref="joinFormRef"
      v-model="createGameForm"
      lazy-validation
    >
      <v-text-field
        class="col-7 my-2"
        v-model="gameName"
        label="Game Name"
        color="primary"
        outlined
        required
        hide-details
      ></v-text-field>

      <v-btn
        :disabled="!createGameForm"
        color="primary"
        class="ml-2 my-auto"
        @click="createGame"
      >
        Create
      </v-btn>
    </v-form>
    <v-btn
      color="primary"
      @click="updateStep"
    >
      Previous
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'GameFormsStepper',
  props: {
    createForm: Boolean,
  },
  data() {
    return {
      gameName: '',
      gameId: '',
      joinGameForm: false,
      createGameForm: false,
    };
  },
  methods: {
    updateStep() {
      this.$emit('previous-step', 1);
    },
    joinGame() {
      this.$router.push('game');
      return '';
    },
    createGame() {
      return '';
    },
  },
};
</script>
