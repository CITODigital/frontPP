import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import Profile from '../views/Profile.vue';
import Vuz from '../views/Vuz.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/uni',
    name: 'uni',
    component: () => import('../views/Uni_Dir.vue')
  },
  {
    path: '/vuz',
    name: 'Vuz',
    component: Vuz,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
