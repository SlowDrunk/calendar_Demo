import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/calendar/index.vue"),
        },
        {
            path: "/dynamicFrom",
            name: "dynamicFrom",
            component: () => import("@/views/DynamicForm/index.vue"),
        },
    ],
});

export default router;
