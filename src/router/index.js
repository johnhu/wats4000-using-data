import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import AdjForNoun from '@/views/AdjForNoun'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/adjfornoun',
    name: 'adjfornoun',
    component: AdjForNoun
  }
]

const router = new VueRouter({
  routes
})

export default router
