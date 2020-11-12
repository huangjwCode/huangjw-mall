import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载写法
const Home = () => import('views/home/Home.vue')
const Classify = () => import('views/classify/Classify.vue')
const Cartfull = () => import('views/cartfull/Cartfull.vue')
const Account = () => import('views/account/Account.vue')

Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'//默认页，重定向
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/classify',
		component:Classify
	},
	{
		path:'/cartfull',
		component:Cartfull
	},
	{
		path:'/account',
		component:Account
	}
]

Vue.use(VueRouter)

const vr = new VueRouter({
	//配置路由和组件之间的映射关系
	routes:routes,
	mode:'history'//history模式	  
})

export default vr