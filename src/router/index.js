import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Discover from '@/page/Discover'
import Mine from '@/page/Mine'
import Order from '@/page/Order'
import Serach from '@/components/home/Serach'
import Location from '@/components/home/Location'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:"home",
      component:Home,
      children:[{
        name:"serach",
        path:'serach',
        component:Serach,
      },
      {
        name:'location',
        path:'location',
        component:Location,
      },
    ]
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },{
      path:'/order',
      name:'order',
      component:Order
    },{
      path:'/mine',
      name:'mine',
      component:Mine
    },
   
    {
      // path: '/',
      path: '**',
      //重定向
      redirect: '/home'
    }
  ]
})
