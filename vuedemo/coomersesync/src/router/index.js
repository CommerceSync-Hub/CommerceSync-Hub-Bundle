import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import RefreshComponent from '/src/components/RefreshComponent.vue'
import SablonComponent from '/src/components/SablonComponent.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/RefreshComponent',
        name: 'RefreshComponent',
        component: RefreshComponent,
    },
    {
        path: '/SablonComponent',
        name: 'SablonComponent',
        component: SablonComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router