import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/app.scss'
import App from './App.vue'

export const app = createApp({
  render: () => h(App)
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('./views/Home')
    },
    {
      path: '/dev-test',
      name: 'dev-test',
      component: () => import('./views/Test')
    }
]
})

app.use(router)
app.mount('#app')