import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ZHSJ from "../views/ZHSJ/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ZHSJ",
    component: ZHSJ,
  },
  {
    path: "/QSFX",
    name: "QSFX",
    component: ()=> import('../views/QSFX/index.vue'),
  },
  {
    path: "/WRFB",
    name: "WRFB",
    component: ()=> import('../views/WRFB/index.vue'),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
