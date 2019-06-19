import Vue from 'vue'
import Router from 'vue-router'
import routes from './routesConfig'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

router.afterEach((to) => {
  document.title = to.meta.title || '前端劝退专家'
})

export default router
