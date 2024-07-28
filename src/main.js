import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios';

axios.defaults.baseURL = process.env.INEED_ENGINE_URL;

createApp(App).use(Router).mount('#app')
