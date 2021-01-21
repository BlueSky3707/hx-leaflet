import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewContent from "../views/mapviews/ViewContent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "ViewContent",
    component: ViewContent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
