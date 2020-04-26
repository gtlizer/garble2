import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VLazyImagePlugin } from "v-lazy-image";


Vue.config.productionTip = false
Vue.use(VLazyImagePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
