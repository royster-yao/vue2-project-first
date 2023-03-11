import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../Views/Home.vue'
import User from '../Views/User.vue'
import Main from '../Views/Main.vue'
import Mall from '../Views/Mall.vue'
import PageOne from '../Views/PageOne.vue'
import PageTwo from '../Views/PageTwo.vue'
import Login from '../Views/Login.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path:'/',
        component:Main,
        redirect:'/home',
        children:[
            {
                path:'home',name:'home',component:Home
            },
            {
                path:'user',name:'user',component:User
            },
            {
                path:'mall',name:'mall',component:Mall
            },
            {
                path:'page1',name:'page1',component:PageOne
            },
            {
                path:'page2',name:'page2',component:PageTwo
            },
        ],
    },
    {
        path:'/login',
        name:'login',
        component:Login

    }
  
]

export default new VueRouter({
    routes
})
