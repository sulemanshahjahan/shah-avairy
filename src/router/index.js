import { createRouter, createWebHistory } from "vue-router";
import BirdsList from "../views/BirdList.vue";
import BirdDetails from "../views/Birds/BirdDetails.vue";
import PairDetails from "../views/Birds/PairDetails.vue";

const routes = [
  {
    path: "/",
    name: "BirdsList",
    component: BirdsList,
  },
  {
    path: "/bird-details/:id",
    name: "BirdDetails",
    props: true,
    component: BirdDetails,
  },
  {
    path: "/pair-details/:id",
    name: "PairDetails",
    props: true,
    component: PairDetails,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router;
