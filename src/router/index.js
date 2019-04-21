import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
// import Scripts from '@/views/Scripts'
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
    // {
    //   path: '/scripts',
    //   name: 'Scripts',
    //   component: Scripts
    // },
    {
      // will match everything
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
