import { createRouter, createWebHistory } from "vue-router";

import BirdsList from "../views/BirdList.vue";
import BirdDetails from "../views/Birds/Details";
import BirdEdit from "../views/Birds/Edit";
import BirdLayout from "../views/Birds/Layout";

import PairDetails from "../views/Pairs/Details";
import PairEdit from "../views/Pairs/Edit";
import PairLayout from "../views/Pairs/Layout";

import NotFound from "../views/NotFound";
import NetworkError from "../views/NetworkError";

import NProgress from 'nprogress';

const routes = [
  {
    path: "/",
    name: "BirdsList",
    component: BirdsList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/bird/:id',
    name: 'BirdLayout',
    props: true,
    component: BirdLayout,
    children: [  // <-----
      {
        path: '',
        name: 'BirdDetails',
        component: BirdDetails
      },
      {
        path: 'edit',
        name: 'BirdEdit',
        component: BirdEdit
      }
    ]
  },
  {
    path: '/pair/:cageNumber',
    name: 'PairLayout',
    props: true,
    component: PairLayout,
    children: [  // <-----
      {
        path: '',
        name: 'PairDetails',
        component: PairDetails
      },
      {
        path: 'edit',
        name: 'PairEdit',
        component: PairEdit
      }
    ]
  }
  ,
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: '/:CatchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    props: true
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
  

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


router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
export default router;
