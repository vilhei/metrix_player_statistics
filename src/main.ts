import { createApp } from "vue";
import "./styles/style.css";
import App from "./App.vue";
import navigationBar from "./components/navigationBar.vue";

const app = createApp(App);
app.config.errorHandler = (err) => {
  console.log(err);
};

app.mount("#app");

const nav = createApp(navigationBar);
nav.mount("#navbar");
