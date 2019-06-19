
const Index = r => require.ensure([], () => r(require('../pages/index')), 'index')

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    meta: {
      title: '前端劝退专家'
    }
  },
  {
    path: '*',
    redirect: '/index',
    component: Index,
    meta: {
      title: '前端劝退专家'
    }
  }
]
export default routes
