// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faEnvelope, faChevronRight, faChevronLeft, faLinkedin, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
