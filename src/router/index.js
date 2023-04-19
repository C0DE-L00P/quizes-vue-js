import { createRouter, createWebHistory } from 'vue-router'
import { MainView, QuizView, ResultView, View404 } from '../views'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/quiz/:id',
            name: 'quiz-page',
            component: QuizView
        },
        {
            path: '/result',
            name: 'result-page',
            component: ResultView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/',
            name: 'main-page',
            component: MainView
        },
		{
			path: "/:catchall(.*)*",
			name: "not-found",
			component: View404
		}
    ]
})

export default router;