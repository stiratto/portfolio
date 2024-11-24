import { createWebHistory, createRouter } from 'vue-router'
import Index from '@/views/Index.vue'
import Projects from '@/views/Projects.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    return { top: 0, behavior: 'smooth' }
    // return desired position
  },
})
export default router
