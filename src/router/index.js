import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
// import Movie from '@/pages/movie/Movie'
// import MovieDetail from '@/pages/movie/MovieDetail'

// vue路由懒加载  异步加载
const Home = (resolve) => {
	import ('@/pages/home/Home').then((module) => {
		resolve(module)
	})
}
const City = (resolve) => {
	import ('@/pages/city/City').then((module) => {
		resolve(module)
	})
}
const Detail = (resolve) => {
	import ('@/pages/detail/Detail').then((module) => {
		resolve(module)
	})
}
const Movie = (resolve) => {
	import ('@/pages/movie/Movie').then((module) => {
		resolve(module)
	})
}
const MovieDetail = (resolve) => {
	import ('@/pages/movie/MovieDetail').then((module) => {
		resolve(module)
	})
}

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
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
	scrollBehavior(to, from, savePosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
