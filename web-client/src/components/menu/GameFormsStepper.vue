<template>
  <div>
    <v-form
      v-if="!createForm"
      class="flex flex-column col-7 mx-auto"
      ref="createFormRef"
      v-model="joinGameForm"
      lazy-validation
    >
      <v-text-field
        class="my-2"
        v-model="gameId"
        label="Game ID"
        color="primary"
        outlined
        required
        hide-details
      ></v-text-field>

      <v-text-field
        class="my-2"
        v-model="userName"
        label="Your username"
        color="primary"
        outlined
        required
        hide-details
      ></v-text-field>

      <v-btn
        :disabled="!joinGameForm"
        color="primary"
        class="my-2 mx-auto"
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
      userName: '',
      joinGameForm: false,
      createGameForm: false,
    };
  },
  methods: {
    updateStep() {
      this.$emit('previous-step', 1);
    },
    joinGame() {
      this.$router.push({ name: 'GameHome', params: { gameId: this.gameId }, query: { username: this.userName } });
      return '';
    },
    async createGame(roomData: {name: string; testId: number}) {
      const createdRoom = await axios.post('http://localhost:3000/room', {
        name: roomData.name,
        testId: roomData.testId,
        userId: 1,
        isClosed: false,
      });
      await this.$router.push(`game/${createdRoom.data.roomId}`);
    },
  },
});
</script>
