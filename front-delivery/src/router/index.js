import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import CadastroView from '@/views/CadastroView.vue'

const routes = [
  { path: '/login', component: LoginView },
  {path: '/cadastro', component: CadastroView },
  {path: '/', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
