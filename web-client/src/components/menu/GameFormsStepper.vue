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

    <div v-else>
      <new-room-form @create-room="createGame"></new-room-form>
    </div>
    <v-btn
      color="primary"
      outlined
      @click="updateStep"
    >
      Previous
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import NewRoomForm from './NewRoomForm.vue';

export default Vue.extend({
  name: 'GameFormsStepper',
  components: {
    NewRoomForm,
  },
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
      this.$router.push(`game/${this.gameId}`);
      return '';
    },
    async createGame(roomData: {name: string; testId: number}) {
      const createdRoom = await axios.post('http://localhost:3000/room', {
        name: roomData.name,
        testId: roomData.testId,
        userId: 1,
      });
      await this.$router.push(`game/${createdRoom.data.roomId}`);
    },
  },
});
</script>
