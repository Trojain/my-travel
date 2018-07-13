import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Movie from '@/pages/movie/Movie'
import MovieDetail from '@/pages/movie/MovieDetail'

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
