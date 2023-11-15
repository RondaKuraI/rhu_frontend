import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL="http://rhu_backend.test/"

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
