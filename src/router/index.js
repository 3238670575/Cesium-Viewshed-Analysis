//配置路由 
import VueRouter from "vue-router"; 
import Vue from 'vue'; 
 
//调用插件
Vue.use(VueRouter); 
 
//引入路由组件  
import Home from '../pages/Home'
import Viewshed from '../pages/ViewShed' 
// 配置路由 
export default new VueRouter({ 
    routes:[  
        { 
            path:"/home", 
            component:Home,
        },
        { 
            path:"/viewshed/:keyword?", 
            component:Viewshed, 
        },  
        //重定向 
        { 
            path:'*', 
            redirect:'/home'
        }
    ]
})