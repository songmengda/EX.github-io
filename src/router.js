import Vue from 'vue'
import Router from 'vue-router'


const Index = r => require.ensure([], () => r(require('./pages/index')), 'index')
const Xin = r => require.ensure([], () => r(require('./pages/xin')), 'xin')


Vue.use(Router)

const routes = [
  {
    path: '/Xin',
    name: 'Xin',
    component: Xin,
    meta: {
      title: 'smd'
    }
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    meta: {
      title: 'smd'
    }
  },
  {
    path: '*',
    redirect: '/index',
    component: Index,
    meta: {
      title: 'smd'
    }
  },


]

const router = new Router({
  routes: routes,
  mode: 'hash'
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router