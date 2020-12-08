import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import GameHome from '../views/GameHome.vue';
import PlayingGame from '../views/PlayingGame.vue';
import GameResults from '../views/GameResults.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game/:gameId',
    name: 'GameHome',
    component: GameHome,
  },
  {
    path: '/game/:gameId/playing',
    name: 'PlayingGame',
    component: PlayingGame,
  },
  {
    path: '/game/:gameId/results',
    name: 'GameResults',
    component: GameResults,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
