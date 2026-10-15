// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Content from "@/views/Content.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/content',
        name: 'Content',
        component: Content
    }
]

// ✅ 代替 new Router()
const router = createRouter({
    // Vue2 mode: 'history' 换成这个函数
    history: createWebHistory(),
    routes
})

export default router