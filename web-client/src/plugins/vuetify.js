import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#F4976C',
        secondary: '#303C6C',
        accent: '#FBE8A6',
        error: '#FF5252',
        info: '#D2FDFF',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
