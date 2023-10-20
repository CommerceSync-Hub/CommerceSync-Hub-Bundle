import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import RefreshComponent from '/src/components/RefreshComponent.vue'
import SablonComponent from '/src/components/SablonComponent.vue'
import Admin from '/src/components/Admin.vue';
import User from '/src/components/User.vue';

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
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
    },
    {
        path: '/User',
        name: 'User',
        component: User,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router