<template>
  <form class="flex flex-column col-7">
    <v-select
      class="my-2"
      v-model="themeId"
      label="Select a Theme"
      color="primary"
      :items="themesContent"
      item-text="name"
      item-value="id"
      @change="displayTests"
      outlined
      required
      hide-details
    ></v-select>

    <v-select
      v-if="themeId"
      class="my-2"
      v-model="testId"
      label="Select a Test"
      color="primary"
      :items="tests"
      item-text="name"
      item-value="id"
      outlined
      required
      hide-details
    ></v-select>

    <v-text-field
      class="my-2"
      v-model="roomName"
      label="Game Name"
      color="primary"
      outlined
      required
      hide-details
    ></v-text-field>

    <v-btn
      :disabled="!themeId && !testId && !roomName"
      color="primary"
      class="mx-auto my-2"
      @click="createGame"
    >
      Create
    </v-btn>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'NewRoomForm',
  data() {
    return {
      testId: null,
      themeId: null,
      roomName: null,
      themesContent: [] as any[],
      tests: [],
    };
  },
  methods: {
    getThemesAndTests() {
      return axios.get('http://localhost:3000/theme');
    },
    displayTests() {
      console.log(this.themeId);
      const themeSelected: any = this.themesContent.filter((theme) => theme.id === this.themeId)[0];
      console.log(themeSelected);
      this.tests = themeSelected.tests;
      console.log(this.tests);
    },
    createGame() {
      const roomData = {
        name: this.roomName,
        testId: this.testId,
      };
      this.$emit('create-room', roomData);
    },
  },
  async mounted() {
    const res = await this.getThemesAndTests();
    console.log(res.data);
    this.themesContent = [...res.data];
  },
});
</script>
