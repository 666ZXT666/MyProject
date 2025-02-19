import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
    { 
        path: 'home', 
        name: 'home', 
        component: () => import('../views/home/Home.vue'),
        redirect: '/home/discover',
        meta: {
            title: '首页',
            keepAlive: true  // Home 组件需要缓存，因为包含了要缓存的 discover
        },
        children: [
            { path: 'follow', name: 'follow', component: () => import('../views/home/follow/Follow.vue'), meta: { keepAlive: false } },
            { 
                path: 'discover', 
                name: 'discover', 
                meta: { keepAlive: true },  // discover 页面缓存
                component: () => import('../views/home/discover/Discover.vue') 
            },
        ]
    },
]

const rootRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'root',
        component: () => import('../views/Root.vue'),
        redirect: '/home',
        children: [
            ...homeRoutes,
            { path: 'message', name: 'message', meta: { title: '消息' }, component: () => import('../views/message/Message.vue') },
            { path: 'mine', name: 'mine', meta: { title: '我的' }, component: () => import('../views/mine/Mine.vue') },
            { 
                path: 'square', 
                name: 'square', 
                meta: { 
                    title: '广场',
                    keepAlive: true  // 广场页面缓存
                }, 
                component: () => import('../views/square/Square.vue') 
            },
        ]
    },
]

const routes: RouteRecordRaw[] = [
    ...rootRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string
    next()
})

export default router

