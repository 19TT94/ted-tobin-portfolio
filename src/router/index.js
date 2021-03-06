import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Copy from '@/views/Copy'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/copy',
      name: 'Copy Writing',
      component: Copy
    },
    {
      // will match everything
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
