import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    },
    // redirect
    {
        path: '/all-jobs',
        redirect: '/jobs'
    },
    //catch all 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router