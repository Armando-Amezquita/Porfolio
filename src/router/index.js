import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contact',
    component: Contact  
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;