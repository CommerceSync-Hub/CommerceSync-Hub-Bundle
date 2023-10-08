import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import RefreshComponent from '/src/components/RefreshComponent.vue'

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/RefreshComponent',
        name: 'RefreshComponent',
        component: RefreshComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router