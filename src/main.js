import { createApp } from "vue";
import "./style.css";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
