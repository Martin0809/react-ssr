import * as Home from './pages'
import * as List from './pages/list'

export default [
  {
    path: '/',
    exact: true,
    component: Home.default,
    ...Home,
  },
  {
    path: '/list',
    exact: true,
    component: List.default,
    ...List,
  },
]
