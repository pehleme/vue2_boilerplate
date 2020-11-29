import Vue from 'vue';
import routes from 'vue-auto-routing';
import Router, { Route } from 'vue-router';
import { createRouterLayout } from 'vue-router-layout';

Vue.use(Router);

const RouterLayout = createRouterLayout((layout) => {
  return import('@/app/layouts/' + layout + '.vue');
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to: Route, from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          savedPosition
            ? savedPosition
            : to.hash
            ? { selector: to.hash }
            : { x: 0, y: 0 }
        );
      }, 1000);
    });
  },
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
    {
      path: '*',
      component: () =>
        import(
          /* webpackChunkName: "page-page-not-found" */ '@/app/pages/not-found.vue'
        ),
    },
  ],
});

export { router };
