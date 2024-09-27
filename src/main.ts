import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import router from "./router";

createApp(App).use(router).mount("#app");
