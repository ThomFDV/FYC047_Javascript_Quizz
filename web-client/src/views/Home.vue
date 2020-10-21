<template>
  <div class="home">
    <div class="hero">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="my-4 my-sm-8 my-lg-16 mx-auto">
      <h1 class="text-4xl font-weight-bold text-center text-secondary">Welcome to our Quiz Game</h1>
      <v-stepper
        v-model="e1"
        class="col-8 mx-auto mt-6 bg-info bg-opacity-75"
        elevation="5"
      >
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
          >
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="e1 > 2"
            step="2"
          >
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
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
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-form
              v-if="!createForm"
              class="flex justify-center"
              ref="form"
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
              ref="form"
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
              @click="e1 = 1"
            >
              Previous
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    //
  },
  data() {
    return {
      e1: 1,
      createForm: false,
    };
  },
  methods: {
    nextStep(isCreating) {
      this.e1 = 2;
      this.createForm = isCreating;
    },
  },
};
</script>

<style>
.home {
  background: #FBE8A6;
  width: 100%;
  height: 100vh;
  padding-top: 60px;
}

.hero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero > div {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  background: #D2FDFF;
  animation: animate 20s linear infinite;
  bottom: -150px;

}

.hero > div:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.hero > div:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.hero > div:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.hero > div:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.hero > div:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.hero > div:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.hero > div:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.hero > div:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.hero > div:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.hero > div:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 10%;
  }

  100%{
    transform: translateY(-1300px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

</style>
