//import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

import "@fontsource/poppins/200.css";
import "@fontsource/poppins/700.css";
import './assets/sty.css';
import "./assets/main.css";

axios.defaults.baseURL="http://rhu_backend.test/"

createApp(App).use(router).mount('#app')

//import "bootstrap/dist/js/bootstrap.js"
