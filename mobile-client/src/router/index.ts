import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import JoinGame from '../views/JoinGame.vue';
import InfoGame from '../views/InfoGame.vue';
import Game from '../views/Game.vue';
import ResultGame from '../views/ResultGame.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/join-game',
    name: 'JoinGame',
    component: JoinGame
  },
  {
    path: '/info-game/:roomId',
    name: 'InfoGame',
    component: InfoGame
  },
  {
    path: '/game/:roomId',
    name: 'Game',
    component: Game
  },
  {
    path: '/result-game',
    name: 'ResultGame',
    component: ResultGame
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
