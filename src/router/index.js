import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../views/Users.vue'
import IndexPage from '../views/IndexPage.vue'
import UserCreate from '../views/UserCreate.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/indexpage',
    component: IndexPage
  },
  {
    path: '/users/create',
    name: 'userscreate',
    component: UserCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
