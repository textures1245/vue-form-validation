// @ts-nocheck
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import FormApp from "../views/FormApp.vue";
import StudentList from "../views/StudentList.vue";
import OverviewApp from "../views/Overview.vue";

//* use routers
const routes = [
  { path: "/", name: "OverviewApp", component: OverviewApp },
  {
    path: "/form-app",
    name: "FormApp",
    component: FormApp,
    children: [
      { path: "student-id/:stuIndex", name: FormApp, component: FormApp },
    ],
  },
  { path: "/student-list", name: "StudentList", component: StudentList },
];

// type NewType = Readonly<RouteRecordRaw[]>;

//* router config
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//* redirect path configuration
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next("/");
  } else {
    next();
  }
});

export default router;
