import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SkillsView from "../views/SkillsView.vue";

/**
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/projects",
    component: ProjectsView,
  },
  {
    path: "/skills",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
