import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载写法
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const User = () => import('views/user/User.vue')
const Detail = () => import('views/detail/Detail.vue')

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
		path:'/category',
		component:Category
	},
	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/user',
		component:User
	},
	{
		path:'/detail/:iid',
		component:Detail
	}
]

Vue.use(VueRouter)

const vr = new VueRouter({
	//配置路由和组件之间的映射关系
	routes:routes,
	mode:'history'//history模式
})

export default vr
