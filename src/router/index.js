import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlacesView from "@/views/PlacesView.vue";
import Booking from "../views/BookingForm.vue";
import Auth from "@/views/Auth.vue";
import FooterVue from "../views/FooterVue.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Auth.vue'),
    },
    {
      path: '/agree',
      name: 'agree',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AgreeView.vue'),
    },
    {
      path: '/parkings',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/BookingForm.vue'),
    }, {
      path: '/footer',
      name: 'footer',
      component: () => import('../views/FooterVue.vue'),
    },
    {
      path: '/side',
      name: 'side',
      component: () => import('../views/Sidebar.vue'),
    },
    {
      path: '/parkings/:id',
      name: 'places',
      component: PlacesView,
    },
  ],


});

export default router;
