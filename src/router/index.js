import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
const moduleDetail = () => import(/* webpackChunkName: "experts-online" */ '@/views/module-detail.vue')
const viewMore = () => import(/* webpackChunkName: "view-more" */ '@/views/view-more.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/moduleDetail',
        name: 'moduleDetail',
        component: moduleDetail
    },
    {
        path: '/viewMore',
        name: 'viewMore',
        component: viewMore
    }
]

const router = new VueRouter({
    // mode: 'history',
    // base: '/',
    routes
})

export default router
