import Vue from 'vue'
import App from './App.vue'  
//引入路由 
import router from './router'; 
//导航栏组件,全局组件 
import TypeNav from './components/TypeNav';  
//全局引入element
import ElementUI from 'element-ui';   
//全局引入element的样式          
import 'element-ui/lib/theme-chalk/index.css';    
import './assets/font/iconfont.css' 

Vue.config.productionTip = false   
 //全局注入element
Vue.use(ElementUI);    
 
Vue.component(TypeNav.name,TypeNav);

new Vue({
  render: h => h(App), 
  // 注册路由 
  router,
}).$mount('#app')
