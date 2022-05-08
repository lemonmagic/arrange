import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import element from './plugins/elementui'
import Driver from "driver.js"
import "driver.js/dist/driver.min.css"
import SocketService from '@/util/socket_service'

SocketService.Instance.connect() // 引用connect方法连接服务端
Vue.prototype.$socket = SocketService.Instance // 挂载到Vue实例

Vue.prototype.$echarts = window.echarts

Vue.prototype.$driver = new Driver({
  allowClose: false, //禁止点击外部关闭
  doneBtnText: '完成', // 完成按钮标题
  closeBtnText: '关闭', // 关闭按钮标题
  stageBackground: '#fff', // 引导对话的背景色
  nextBtnText: '下一步', // 下一步按钮标题
  prevBtnText: '上一步', // 上一步按钮标题
})

Vue.use(element)

Vue.config.productionTip = false  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
