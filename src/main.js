import RugoVue from "@rugo-vn/vue";
import { createApp } from 'vue'
import App from './App.vue'

import "@rugo-vn/vue/dist/index.css";
import "./index.css";

const app = createApp(App);

app.use(RugoVue);

app.mount("#app");