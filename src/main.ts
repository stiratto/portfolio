import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import 'lenis/dist/lenis.css'
import router from '@/router/router.ts'

const app = createApp(App)
app.use(router)
app.mount('#app')
