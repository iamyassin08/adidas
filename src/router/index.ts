import { createRouter, createWebHistory } from "vue-router";
import "preline/preline";
import { type IStaticMethods } from "preline/preline";
import HomeView from "../views/HomeView.vue"
import AppLayout from '../layouts/AppLayout.vue';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {layout: AppLayout},
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      meta: {layout: AppLayout},
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/contact",
      name: "Contact",
      meta: {layout: AppLayout},
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/products",
      name: "products",
      meta: {layout: AppLayout},
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      meta: {layout: AppLayout},
      component: () => import("../views/SignInView.vue"),
    },
  
    
  ],
});

router.afterEach((_to, _from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});
export default router;
