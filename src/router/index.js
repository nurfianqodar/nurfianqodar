import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SkillsView from "../views/SkillsView.vue";

/**
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/skills",
    name: "Hire Me!",
    component: SkillsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
