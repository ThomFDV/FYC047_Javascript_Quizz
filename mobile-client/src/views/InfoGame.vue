<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>QUIZ Game</ion-title>
      </ion-toolbar>
    </ion-header> 
    
    <ion-content :fullscreen="true">

      <ion-card>
        <ion-card-header>
          <ion-card-title>Info Game</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <h2>Player in the Game - {{ roomInfo.users.length }}</h2>
            <h2>Quizz Theme - {{ roomInfo.test.theme.name }}</h2>
        </ion-card-content>
      </ion-card>

      <ion-list>
                <ion-list-header>
                   <ion-label>Player List</ion-label>
                </ion-list-header>
                <ion-item v-for="player in roomInfo.users" :key="player" style="--border-radius: 10px">
                    <ion-label>{{ player.username }}</ion-label>
                </ion-item>
            </ion-list>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button v-on:click="joinGame" expand="block" color="primary">
          Start Game
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCard, IonLabel, IonItem, IonFooter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { GameService } from '../services/game.service';

// should display infos

export default defineComponent({
  name: 'InfoGame',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList, 
    IonCard, 
    IonLabel,
    IonItem, 
    IonFooter
  },
  data() {
    return {
      roomId: this.$route.params.roomId,
      roomInfo: GameService.roomInfo,
    };
  },
  mounted() {
    console.log(this.roomInfo);
  }
});
</script>