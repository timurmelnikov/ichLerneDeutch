import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books';
import Words from './views/Words';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Profile from './views/Profile';

Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/books',
            name: 'books',
            component: Books
        },
        {
            path: '/words',
            name: 'words',
            component: Words
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },

    ],
    mode: 'history'
})
