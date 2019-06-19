import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import canvasNest from './assets/common/js/lib/canvas-nest'
import resetCss from './assets/common/css/lib/reset.css'

Vue.config.productionTip = false
Vue.use(canvasNest)
Vue.use(resetCss)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
