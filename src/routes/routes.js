import {createRouter, createWebHistory} from "vue-router";
import EventsListPage from "@/pages/EventsListPage";


const routes = [
    {
        path: '/events/:id',
        component: EventsListPage,
    }
];

export const router = createRouter({
    routes,
    history: createWebHistory()
})
