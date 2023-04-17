import { createRouter, createWebHistory } from 'vue-router'
// import { QuizView, } from '../views/index'
import MainView from '../views/MainView.vue'
import QuizView from '../views/QuizView.vue'
import ResultView from '../views/ResultView.vue'
import View404 from '../views/View404.vue'

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