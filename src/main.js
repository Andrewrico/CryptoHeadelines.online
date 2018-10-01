import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.config.productionTip = false


new Vue({
  mode: 'History',
  render: h => h(App)
}).$mount('#app')
