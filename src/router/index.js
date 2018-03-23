import Vue from 'vue'
import Router from 'vue-router'
import Apercu from '@/components/Apercu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Apercu',
      component: Apercu
    }
  ]
})
