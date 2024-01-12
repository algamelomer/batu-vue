import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../views/Contact-us.vue'
import Facilities from '../views/Facilities.vue'
import Gallary from '../views/Gallary.vue'
import Media from '../views/Media.vue'
import Apply from '../views/Apply.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView,
            props: true
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }, {
            path: '/Facilities',
            name: 'Facilities',
            component: Facilities
        }, {
            path: '/Gallary',
            name: 'Gallary',
            component: Gallary
        }, {
            path: '/Media',
            name: 'Media',
            component: Media
        },
        {
            path: '/Apply',
            name: 'Apply',
            component: Apply
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        }
    ]
})

export default router