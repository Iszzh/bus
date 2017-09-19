import Vue from 'vue'
import VueRouter from 'vue-router'

//首页
import Home from '../views/Home/Home.vue'
//登录
import Login from '../views/Login/Login.vue'
//注册
import Register from '../views/Register/Register.vue'
//收藏
import Collection from '../views/Collection/Collection.vue'
//个人中心
import Personal from '../views/Personal/Personal.vue'
//404
import notfound from '../views/Notfound/404.vue'
//二维码支付
import Pay from '../views/Pay/Pay.vue'
//便民服务
import Service from '../views/Service/Service.vue'
//地图定位
import Map from '../views/Map/Map.vue'
//公交路线
import Line from '../views/Line/Line.vue'
//公交信息
import Bus from '../views/Bus/Bus.vue'
//搜索
import Search from '../views/Search/Search.vue'

Vue.use(VueRouter);

// meta.ShowNav => 是否显示底部导航
// meta.showLine => 是否显示线路导航

let router=new VueRouter({
    routes:[{
        path:'/',
        redirect:'/Home',
        name:'重定向回首页'
    },{
        path:'/Home',
        component:Home,
        name:'首页',
        meta:{
            showNav:true
        }
    },{
        path:'/Collection',
        component:Collection,
        name:'收藏页',
        meta:{
            showNav:true
        }
    },{
        path:'/Personal',
        component:Personal,
        name:'个人中心',
        meta:{
            showNav:true
        }
    },{
        path:'/Login',
        component:Login,
        name:'登录'
    },{
        path:'/Register',
        component:Register,
        name:'注册'
    },{
        path:'/Pay',
        component:Pay,
        name:'支付界面'
    },{
        path:'/Service',
        component:Service,
        name:'便民服务'
    },{
        path:'/Map',
        component:Map,
        name:'地图位置'
    },{
        path:"/Line/:id",
        component:Line,
        name:'公交线路'
    },{
        path:'/Bus',
        component:Bus,
        name:'公交信息'
    },{
        path:'/Search',
        component:Search,
        name:'搜索'
    },{
        path:'*',
        component:notfound,
        name:'404页面'
    }]
});

export default router