import jsonp from 'js/jsonp'
import axios from 'axios'


// 影院热映
export function getMovieShowing() {
	const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items'
	const data = Object.assign({}, {
		os: 'ios',
		start: 0,
		count: 8,
		loc_id: 108288,
		_: 1531452745153
	})
	return jsonp(url, data)
}


// 免费在线观看的新片
export function getMovieFree() {
	const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items'
	const data = Object.assign({}, {
		os: 'ios',
		start: 0,
		count: 8,
		loc_id: 108288,
		_: 1531452745153
	})
	return jsonp(url, data)
}


// 近期热门电影
export function getMovieLatest() {
	const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'
	const data = Object.assign({}, {
		os: 'ios',
		start: 0,
		count: 8,
		loc_id: 108288,
		_: 1531452745153
	})
	return jsonp(url, data)
}


// 电影详情
export function getMovieDetail(id) {
	const url = `https://m.douban.com/rexxar/api/v2/elessar/subject/${id}`
	const data = Object.assign({}, {})
	return jsonp(url, data)
}


// 影人
export function getCelebrities(id) {
	const url = `https://m.douban.com/rexxar/api/v2/movie/${id}/credits`
	const data = Object.assign({}, {})
	return jsonp(url, data)
}


// 短评
export function getInterests(id) {
	const url = `https://m.douban.com/rexxar/api/v2/movie/${id}/interests`
	const data = Object.assign({}, {
		count: 4,
		order_by: 'hot',
		start: 0,
		ck: '',
		for_mobile: 1
	})
	return jsonp(url, data)
}


// 讨论
export function getDiscuss(id) {
	const url = `https://m.douban.com/rexxar/api/v2/movie/${id}/forum_topics`
	const data = Object.assign({}, {
		start: 0,
		count: 5,
		ck: '',
		for_mobile: 1
	})
	return jsonp(url, data)
}
