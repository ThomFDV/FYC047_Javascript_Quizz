<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>QUIZ Game</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">QUIZ Game</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Welcome to our Quiz Game</ion-card-subtitle>
          <ion-card-title>Ready to Play ?</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-text color="dark">
            <h2 class="ion-text-center">
              Play with your friends
            </h2>
          </ion-text>

          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque ut tempor ex. Sed a augue dolor. 
            Proin arcu arcu, placerat sit amet tempus a, fringilla at quam. 
            Curabitur tincidunt felis at dui hendrerit bibendum. 
            Orci varius natoque penatibus magnis dis parturient montes, nascetur ridiculus mus.
          </h3>
          
          <br>
          <ion-text color="dark">
            <h2 class="ion-text-center">
              Play on every platforms
            </h2>
          </ion-text>
          <h3>
            Maecenas pulvinar cursus nisl, eget cursus neque porta cursus. 
            Duis vulputate vitae arcu dignissim, at vulputate dolor gravida. 
            Pellentesque consectetur ornare lectus quis tempus. 
            In turpis urna, placerat sed erat ut, feugiat tempor mi
          </h3>
          <br>
          <ion-text color="dark">
            <h2 class="ionc-text-center">
              Create some questions via the desktop app
            </h2>
          </ion-text>
          <h3>
            Nullam sodales ornare ipsum eu ultricies. 
            Donec id elementum enim. Nulla in nibh non eleifend. 
            Sed non pulvinar velit. In sit amet interdum urna, in molestie est. 
            Proin ultricies sollicitudin ipsum, a cursus ipsum posuere eu
          </h3>
        </ion-card-content>
        
      </ion-card>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button v-on:click="joinGame" expand="block" color="primary">
          Join Game
        </ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonFooter, IonButton, IonText } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, 
    IonFooter, 
    IonButton, 
    IonText
  },
  methods: {
    joinGame() {
      this.$router.push('join-game');
      return ''
    }
  }
});
</script>