import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
// import Movie from '@/pages/movie/Movie'
// import MovieDetail from '@/pages/movie/MovieDetail'


// vue路由懒加载  异步加载
const Home = resolve => require(['@/pages/home/Home'], resolve)
const Login = resolve => require(['@/pages/login/Login'], resolve)
const User = resolve => require(['@/pages/user/User'], resolve)
const City = resolve => require(['@/pages/city/City'], resolve)
const Detail = resolve => require(['@/pages/detail/Detail'], resolve)
const Movie = resolve => require(['@/pages/movie/Movie'], resolve)
const MovieDetail = resolve => require(['@/pages/movie/MovieDetail'], resolve)


Vue.use(Router)
var router;
export default router = new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		}, {
			path: '/login',
			name: 'Login',
			component: Login
		}, {
			path: '/user',
			name: 'User',
			component: User,
			meta: {
				title: '个人中心',
				requireAuth: true // 只要此字段为true，必须做鉴权处理
			}
		}, {
			path: '/city',
			name: 'City',
			component: City
		}, {
			path: '/detail/:id', // :id  动态路由
			name: 'Detail',
			component: Detail
		}, {
			path: '/movie',
			name: 'Movie',
			component: Movie
		}, {
			path: '/movie/:id', // :id  动态路由
			name: 'MovieDetail',
			component: MovieDetail
		}

	],
	//切换到新路由时页面滚到顶部
	scrollBehavior(to, from, savePosition) {
		return {
			x: 0,
			y: 0
		}
	}
})



// 路由导航钩子做鉴权

let indexScrollTop = 0
// 路由进入下一个路由对象前，判断是否需要登陆
router.beforeEach((to, from, next) => {
	// 在路由meta对象中由个requireAuth字段，只要此字段为true，必须做鉴权处理
	if (to.matched.some(res => res.meta.requireAuth)) {
		// 获取存储在本地的一些用户信息
		let userMobile = localStorage._mobile_;
		// 如果userMobile没有值就是undefined，则为未登录状态
		if (userMobile === undefined) {
			// 直接去了登录页面
			next({
				path: '/login',
				query: {
					redirect: to.path // 将跳转的路由path作为参数，登录成功后再跳转到该路由
				}
			})
		} else {
			// // 执行到说明本地存储有用户信息
			// // 但是用户信息是否过期还是需要验证一下滴
			// let overdueTime = userData.overdueTime
			// let nowTime = +new Date
			// // 登陆过期和未过期
			// if (nowTime > overdueTime) {
			// 	// 登录过期的处理，君可按需处理之后再执行如下方法去登录页面
			// 	// 我这里没有其他处理，直接去了登录页面
			// 	next({
			// 		path: '/login',
			// 		query: {
			// 			redirect: to.path
			// 		}
			// 	})
			// } else {
			// 	next()
			// }
			next();
		}
	} else {
		next()
	}
	if (to.path !== '/') {
		// 记录现在滚动的位置
		indexScrollTop = document.body.scrollTop
	}
	// 设置当前title
	document.title = to.meta.title || document.title
})

router.afterEach(route => {
	if (route.path !== '/') {
		document.body.scrollTop = 0
	} else {
		Vue.nextTick(() => {
			// 回到之前滚动位置
			document.body.scrollTop = indexScrollTop
		})
	}
})
