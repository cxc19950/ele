// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Page from '@/components/common/Page'
Vue.component('page',Page)
Vue.filter('price',(value)=>{
    return '$'+value
}
)
Vue.filter('load',(value)=>{
  if(value>=1000){
      let date = (value/1000).toFixed(2)
      return date+'km'
  }else{
    return value+'m'
  }
})

Vue.prototype.$center = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
