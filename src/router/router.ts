import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DefaultLayout",
    component: () => import("@/layout/DefaultLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "Login" },
      },
      {
        path: "Login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
