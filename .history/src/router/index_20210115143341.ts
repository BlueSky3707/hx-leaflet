import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewContent from "../views/mapviews/ViewContent.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter);
Vue.use(Element);

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
