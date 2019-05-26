import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import iview from './iview'
import { getRequest, post2json, post2Form } from './utils/api'

Vue.config.productionTip = false

//http请求挂载vue原型
Vue.prototype.get = getRequest;
Vue.prototype.post2json = post2json;
Vue.prototype.post2Form = post2Form;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
