import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/Home"
import Index from "@/pages/home/components/Index"
import Product from "@/pages/home/components/Product"
import Category from "@/pages/home/components/Category"
import Order from "@/pages/home/components/Order"
import User from "@/pages/home/components/User"
import Login from "@/pages/login/Login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      components: HelloWorld,
      redirect: "/home/index",
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: "登录系统" }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requterAuth: true,
        title: "系统首页"
      },
      children: [{
        path: 'index',
        name: 'Index',
        component: Index,
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
      },
      {
        path: 'order',
        name: 'Order',
        component: Order,
      },
      {
        path: 'user',
        name: 'User',
        component: User,
      }
      ]
    },
    {
      path: "/404",
      name: "404",
      component:resolve=>(require(["@/pages/error/404"],resolve))
    },
    {
      path: "/403",
      name: "403",
      component:resolve=>(require(["@/pages/error/403"],resolve))
    },

  ]
})
