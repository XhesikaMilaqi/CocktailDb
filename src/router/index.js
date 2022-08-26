import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nonalcoholic',
    name: 'NonAlcoholic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "NonAlcoholic" */ '../views/NonAlcoholic.vue')
  },
  {
    path: '/detailsView/:id',
    name: 'detailsView'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
