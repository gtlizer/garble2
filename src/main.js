import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCollision from 'vue-collision'

Vue.config.productionTip = false
Vue.use(VueCollision, { globalTriggers: ['resize', 'scroll'] })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
