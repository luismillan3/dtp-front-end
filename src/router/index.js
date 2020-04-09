import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/UploadPage.vue'
import MandatoryFields from '../views/MandatoryFields.vue'
import FunctionalFields from '../views/FunctionalFields.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },

  {
    path: '/mandatory',
    name: 'MandatoryFields',
    component: MandatoryFields
  },

  {
    path: '/functional',
    name: 'FunctionalFields',
    component: FunctionalFields
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
