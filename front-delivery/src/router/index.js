import { createRouter, createWebHistory } from 'vue-router'
import SegundaPagina from '../views/SegundaPagina.vue'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/segunda', component: SegundaPagina },
  {path: '/', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
