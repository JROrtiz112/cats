import { createWebHistory, createRouter } from "vue-router";

// Screens
import Home from '../views/Home.vue'
import CatForm from '../views/CatForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cat/:action',
    name: 'cat',
    component: CatForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
