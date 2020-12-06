import Vue from "vue";
import VueRouter from "vue-router";
import Categorias from "../views/Categorias.vue";
import Cuadriculas from "../views/Cuadriculas.vue";
import Juego from "../views/Juego.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Categorias",
    name: "Categoria",
    component: Categorias,
  },
  {
    path: "/Cuadriculas",
    name: "Cuadriculas",
    component: Cuadriculas,
  },
  {
    path: "/Juego",
    name: "Juego",
    component: Juego,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
