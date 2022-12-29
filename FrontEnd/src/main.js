import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";

import BootstrapVue3 from "bootstrap-vue-3";
import TheHeader from "./components/TheHeader.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";



const app = createApp(App);
app.component("the-header", TheHeader);
app.use(BootstrapVue3);
app.use(router);
app.use(store);
app.mount("#app");
