import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game.vue"),
  },
  {
    path: "/game/logos",
    name: "Logos",
    component: () => import("@/views/Logos.vue"),
  },
  {
    path: "/logos/3x2",
    name: "3x2",
    component: () => import("@/views/logos/3x2.vue"),
  },
  {
    path: "/game/peliculas",
    name: "Peliculas",
    component: () => import("@/views/Peliculas.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
