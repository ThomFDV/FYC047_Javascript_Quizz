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
          <ion-card-title>Join Game</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="handleJoin">
            <ion-item style="--border-radius: 10px 10px 0px 0px">   
              <ion-label position="floating">Username</ion-label>         
              <ion-input type="text" v-model="form.username" id="roomId" required></ion-input>
            </ion-item>
            <ion-item style="--border-radius: 0px 0px 10px 10px ">   
              <ion-label position="floating">Enter GameID</ion-label>         
              <ion-input type="text" v-model="form.roomId" id="roomId" required></ion-input>
            </ion-item>
            <ion-button expand="block" size="default" type="submit">Join</ion-button>
          </form>
        </ion-card-content>
        
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, alertController, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { GameService } from '../services/game.service';


export default defineComponent({
  name: 'JoinGame',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput
  },
  data() {
    return {
      form: {
        username: "",
        roomId: ""
      }
    };
  },
  mounted() {
    this.form.username = GameService.userInfo;
    this.form.roomId = "";
  },
  methods: {
    async handleJoin() {
      if (this.form.roomId && this.form.username) {
        const roomId = this.form.roomId.trim();
        GameService.getRoom(roomId).then((res) => { 
          if (res.data != null && res.data.id == roomId) {
            GameService.roomInfo = res.data;
            this.checkUser(this.form.username, roomId);
          }
          loadingController.dismiss();
        }).catch(async (err: any) => {
          loadingController.dismiss();
          console.log(err);
          const errorAlert = await alertController.create({
            header: 'Failed',
            subHeader: 'Get Room Fail',
            message: 'Please enter a valid GameID',
            buttons: ['OK']
          });

          await errorAlert.present();
        });
      } else {
        const errorAlert = await alertController.create({
            header: 'Failed',
            subHeader: 'Get Room Fail',
            message: 'Please enter a GameID',
            buttons: ['OK']
          });

        await errorAlert.present();
      }
    },

    async checkUser(username: string, roomId: string) {
      if (username) {
        GameService.joinPlayerToRoom(roomId, username).then((res) => {
          console.log(res);
          
          if (res.data != null) {
            GameService.userInfo = username;
            this.$router.push(`/info-game/${roomId}`);
          }
          loadingController.dismiss();
        }).catch(async (err: any) => {
          loadingController.dismiss();
          console.log(err);
          
          const errorAlert = await alertController.create({
            header: 'Failed',
            subHeader: 'Get User Fail',
            message: 'Please enter a valid Username',
            buttons: ['OK']
          });

          await errorAlert.present();
        });
      } else {
        const errorAlert = await alertController.create({
            header: 'Failed',
            subHeader: 'Get User Fail',
            message: 'Please enter a Username',
            buttons: ['OK']
          });

        await errorAlert.present();
      }
    }
  }
});
</script>