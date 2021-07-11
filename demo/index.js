import { createApp } from "vue";
import { SnackbarService, Vue3Snackbar } from "../src";
import App from "./App.vue";

const app = createApp(App);

app.use(SnackbarService);
app.component("vue3-snackbar", Vue3Snackbar);

app.mount("#app");
