import Vue from 'vue'
import Router from 'vue-router'
import WordSlider from '@/components/WordSlider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordSlider',
      component: WordSlider
    }
  ]
})
