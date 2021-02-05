// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import "./assets/js/rem"

import "./assets/styles/animate.css"
import "./assets/styles/border.css"
import "./assets/styles/reset.css"

import axios from "axios"
Vue.prototype.http = axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('datefmt', function (input, fmtstring) {
  return moment(input).format(fmtstring)
})

Vue.use(ElementUI);


router.beforeEach((to, from, next) => {
  console.log("路子钩子跳转")
  document.title = `Mmail后端管理系统`;
  const role = localStorage.getItem('admin')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    //管理员权限可进入
    role === "admin" ? next() : next('/403')
  } else if (to.matched.length === 0) {
    next('/404')
  } else {
    //判断浏览器是否是IE10以下，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/edit') {
      Vue.prototype.$alert("vue-quill-editir组件不兼容IE10以下,请使用更高版本浏览器", "浏览器不兼容通知", {
        confirmButtonText: '确定'
      })
    } else {
      next()
    }
  }
})





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
