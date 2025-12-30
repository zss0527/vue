export default [
    {
        path: '',
        redirect: 'article'
    },
    {
        path: 'article/:id?',
        component: () => import('../views/secondviews/Article.vue'),
    },
    {
        path: 'collect',
        component: () => import('../views/secondviews/Collect.vue'),
    },
    {
        path: 'like',
        component: () => import('../views/secondviews/Like.vue'),
    },
    {
        path: 'user',
        component: () => import('../views/secondviews/User.vue'),
    },
]