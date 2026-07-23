import { createRouter } from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue' // 1. Importe o componente

const routes = [
    {
    path: '/',
    name: 'home',
    component: HomeView
    },
    {
    path: '/login', // 2. Defina o endereço da URL
    name: 'login',
    component: Login // 3. Associe o componente à rota
    }
]

const router = createRouter({

    routes
})

export default router
