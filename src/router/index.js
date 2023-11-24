import { createWebHistory, createRouter } from "vue-router";

import HomePage from '../components/HomePage.vue';
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import ClientDashboard from '../components/ClientHome.vue'
import ClientRequest from '../components/ClientRequest.vue'
import AdminLogin from '../components/AdminLogin.vue'
import AdminSignup from '../components/AdminSignup.vue'
import AdminHome from '../components/AdminHome.vue'
import ClientBorrowed from '../components/ClientBorrowed.vue'
import ClientReturn from '../components/ClientReturn.vue'
import AdminBorrow from '../components/AdminBorrow.vue'
import AdminReturn from '../components/AdminReturn.vue'
import AdminRequest from '../components/AdminRequest.vue'

const routes=[{
    name:'Home',
    path:'/',
    component:HomePage
},{
    name:'Login',
    path:'/login',
    component:LoginPage
},{
    name:'Signup',
    path:'/signup',
    component:SignupPage
},{
    name:'Dashboard',
    path:'/home',
    component:ClientDashboard
},{
    name:'ClientRequest',
    path:'/client-request',
    component:ClientRequest
},{
    name:'AdminLogin',
    path:'/admin-login',
    component:AdminLogin
},{
    name:'AdminSignup',
    path:'/admin-signup',
    component:AdminSignup
},{
    name:'AdminHome',
    path:'/controlls',
    component:AdminHome
},{
    name:'ClientBorrowed',
    path:'/client-borrowed',
    component:ClientBorrowed
},{
    name:'ClientReturn',
    path:'/client-returned',
    component:ClientReturn
},{
    name:'AdminBorrow',
    path:'/admin-borrow',
    component:AdminBorrow
},{
    name:'AdminReturn',
    path:'/admin-return',
    component:AdminReturn
},{
    name:'AdminRequest',
    path:'/admin-request',
    component:AdminRequest
}]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;