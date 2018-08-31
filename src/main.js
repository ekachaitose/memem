import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VeeValidate)

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
