export default [
    {
        path: '',
        redirect: 'article'
    },
    {
        path: 'article/:id?',
        component: () => import('../views/Article.vue'),
    },
    {
        path: 'collect',
        component: () => import('../views/Collect.vue'),
    },
    {
        path: 'like',
        component: () => import('../views/Like.vue'),
    },
    {
        path: 'user',
        component: () => import('../views/User.vue'),
    },
]