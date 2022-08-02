import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Index from "@/pages/Index.vue";
import Example from "@/pages/Example.vue";

const routes: Array<RouteRecordRaw> = [
  {
    component: Index,
    path: "/",
    name: "index"
  },
  {
    component: Example,
    path: "/",
    name: "example",
    meta: { title: "Examples" }
  }
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  const baseTitle = "Another minecraft services clone";

  if (to.name === "index") {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
