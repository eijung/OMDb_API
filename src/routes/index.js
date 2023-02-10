import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './home'
import Movie from './movie'
import About from './about'

export default createRouter({
    // Hash, History
    history: createWebHashHistory(),
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }
    ]
})