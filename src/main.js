import { createApp } from 'vue'
import App from './App.vue'
//import '.registerServiceWorker'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import "./assets/main.css";

loadFonts()

axios.defaults.baseURL = "http://rhu_backend.test/"

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
