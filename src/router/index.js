import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path:"/:pathMatch(.*)*",
        name:"notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path:"/contact/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        porp: true
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.export.env.BASE_URL),
    routes,
});

export default router;