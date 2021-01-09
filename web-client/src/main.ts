import Vue from 'vue';
import socketio from '@/plugins/socketio';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
// import VueSocketIO from 'vue-socket.io';
// import SocketIO from 'socket.io-client';
//
// Vue.use(new VueSocketIO({
//     debug: true,
//     // @ts-ignore
//     connection: SocketIO('http://localhost:3000'),
//   }),
// );
// Vue.use(socketio);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
