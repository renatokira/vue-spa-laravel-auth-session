import { useAuthStore } from "../stores/auth";
import { createRouter, createWebHistory } from "vue-router"

import Home from "../Pages/Home.vue"
import NotFound from "../Pages/NotFound.vue"

const routes = [
    { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true }, },
    { path: '/about', name: 'About', component: () => import("../Pages/About.vue"), meta: { requiresAuth: true }, },
    { path: "/profile", name: "Profile", component: () => import("../Pages/Profile.vue"), meta: { requiresAuth: true }, },
    {
        path: '/login', name: 'Login',
        component: () => import("../Pages/Login.vue"),
        beforeEnter: async (to, from, next) => {
            const { isLoggedIn } = useAuthStore();
            if (await isLoggedIn()) {
                next('/');
            } else {
                next();
            }
        }
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    const { isLoggedIn } = useAuthStore();
    const someRouteNeedsAuth = to.matched.some(route => route.meta.requiresAuth);
    if (someRouteNeedsAuth) {
        if (!await isLoggedIn()) {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }

});


export default router;