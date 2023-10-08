import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import RefreshComponent from '/src/components/RefreshComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/',
        name: 'RegreshComponent',
        component: RefreshComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router