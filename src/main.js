import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Import MDI font styles
// import customIcons from './custom-icons.js'; // Import your custom icons
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as transitions from 'vuetify/lib/components/transitions';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons by default
  },
  directives,
  components,
  transitions
});
// Tạo instance của Vuetify 

createApp(App)
  .use(vuetify) // Sử dụng Vuetify trong ứng dụng Vue
  .use(router) // Sử dụng router trong ứng dụng Vue
  .mount('#app');