import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GameHome from '../views/GameHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'GameHome',
    component: GameHome,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
