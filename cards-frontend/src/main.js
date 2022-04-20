import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);
app.use(store).use(VueAxios, axios).use(router).mount("#app");
