import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/pages/login'
import signin from '@/pages/signin'
import signup from '@/pages/signup'
import home from '@/pages/home'
import index from '@/pages/index'
import topic from '@/pages/topic'
import explore from '@/pages/explore'

Vue.use(VueRouter)
// 1、定义组件

// 2、定义路由
const routes = [
	{
		path: '/',
		component: home,
		children: [
			{
				path: '',
				component: topic
			},
			{
				path: '/index',
				component: index
			},
			{
				path: '/topic',
				component: topic
			},
			{
				path: '/explore',
				component: explore
			},
		]
	},
	{
		path: '/login',
		component: login,
		children: [
			{
				path: '',
				component: signin
			},
			{
				path: 'signin',
				component: signin
			},
			{
				path: 'signup',
				component: signup
			}
		]
	},
	{
		path: '*',
		redirect: '/',
		beforeEnter: (to, from, next) => {
			if (0) {
				next()
			} else {
				next('/login')
			}
		}
	}
]

// 3、创建router实例
const router = new VueRouter({
	routes
})

// 4、挂载根实例
export default router

