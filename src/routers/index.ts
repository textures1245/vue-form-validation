// @ts-nocheck
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import FormApp from "../views/FormApp.vue";
import StudentList from "../views/StudentList.vue";
import OverviewApp from "../views/Overview.vue";

//* use routers
const routes = [
  {
    path: "/form-app",
    name: FormApp,
    component: FormApp,
    children: [
      { path: "student-id/:stuIndex", name: FormApp, component: FormApp },
    ],
  },
  { path: "/student-list", name: StudentList, component: StudentList },
  { path: "/application-overview", name: OverviewApp, component: OverviewApp },
];

// type NewType = Readonly<RouteRecordRaw[]>;

//* router config
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//* redirect path configuration
router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next("/form-app");
  } else {
    next();
  }
});

export default router;
