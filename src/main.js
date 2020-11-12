import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

//Vue实例有$on,$emit等方法，所以可以作为$bus的事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
