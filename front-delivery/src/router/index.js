import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Cadastro from '@/views/Cadastro.vue'

const routes = [
  { path: '/login', component: Login },
  {path: '/cadastro', component: Cadastro},
  {path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
