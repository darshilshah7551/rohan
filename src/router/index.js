import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Projects from '@/views/Projects'
import Team from '@/views/Team'
import Grocery from '@/components/Grocery.vue'
import Foodbeverage from '@/components/Food&beverage.vue'
import Homekitchen from '@/components/Homekitchen.vue'
import Fashion from '@/components/Fashion.vue'
import Beauty from '@/components/Beauty.vue'
import Account from '@/components/Account.vue'
import Cart from '@/components/Cart.vue'
import Shop from '@/views/Shop.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/grocery',
    name: 'grocery',
    component: Grocery
  },
  {
    path: '/rohan',
    name: 'Rohan',
    component: Foodbeverage
  },
  {
    path: '/homekitchen',
    name: 'homekitchen',
    component: Homekitchen
  },
  {
    path: '/fashion',
    name: 'fashion',
    component: Fashion
  },
  {
    path: '/beauty',
    name: 'beauty',
    component: Beauty
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

]

const router = new VueRouter
  ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router
