import { createApp } from "vue";
import "./style.css";
import router from "./routers/index";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";

import App from "./App.vue";

createApp(App).use(router).use(plugin, defaultConfig).mount("#app");
