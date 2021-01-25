import { pages, routes as route } from "@/constants";
import { messageService } from "@/services/MessageService";
import ListingEmployeeContainer from "@/views/employee/ListingEmployeeContainer";
import FormProjectContainer from "@/views/project/FormProjectContainer";
import ListingProjectContainer from "@/views/project/ListingProjectContainer";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer.vue");

// Views
const Dashboard = () => import("@/views/Dashboard.vue");

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/dashboard",
    name: pages.DASHBOARD,
    component: TheContainer,
    children: [
      {
        path: "dashboard",
        name: pages.HOME,
        component: Dashboard,
        meta: {
          breadcrumb: [{ name: "Dashboard" }],
        },
      },
    ],
  },
  {
    path: "/cadastro",
    redirect: "/",
    name: pages.REGISTER,
    component: TheContainer,
    children: [
      {
        path: route.LIST_PROJECT,
        name: pages.LIST_PROJECT,
        component: ListingProjectContainer,
        meta: {
          requiresAuth: ["projetos"],
          breadcrumb: [{ name: "Projetos" }],
        },
      },
      {
        path: route.NEW_PROJECT,
        name: pages.NEW_PROJECT,
        component: FormProjectContainer,
        meta: {
          requiresAuth: ["projetos"],
          breadcrumb: [{ name: "Projetos" }],
        },
      },
      {
        path: route.EDIT_PROJECT,
        name: pages.EDIT_PROJECT,
        component: FormProjectContainer,
        meta: {
          requiresAuth: ["projetos"],
          breadcrumb: [{ name: "Projetos" }],
        },
      },
      {
        path: "funcionarios",
        name: pages.EMPLOYEE,
        component: ListingEmployeeContainer,
        meta: {
          requiresAuth: ["funcionarios"],
          breadcrumb: [{ name: "Funcionários" }],
        },
      },
    ],
  },
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta && to.meta.requiresAuth;
  if (requiresAuth) {
    const hasPermission: boolean = Vue.prototype.$keycloak.hasRealmRole(
      requiresAuth[0]
    );

    if (!hasPermission) {
      messageService.warning(
        `Você não possui permissão para acessar esta página`,
        "ATENÇÃO"
      );
      return next({
        name: pages.DASHBOARD,
      });
    }
  }
  return next();
});

export default router;
