import { createWebHistory, createRouter } from 'vue-router'

import App from '@/components/App.vue'

const routes = [
    { 
        path: '/', 
        component: App,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router