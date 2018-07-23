// 用jsonp抓线上数据

import jsonp from 'js/jsonp'
import axios from 'axios'
import {
	getCity
} from 'js/cache'


// 获取首页轮播图
export function geiIndexBanner() {
	const url = 'https://zt.dujia.qunar.com/api/app_outbound_travel/index_banner.php'
	const data = Object.assign({}, {
		city: getCity()
	})
	return jsonp(url, data)
}

// 获取首页热销推荐
export function getRecommend() {
	const url = '/api/dujia/fetch/ajax-getsearch'
	const data = Object.assign({}, {
		count: 10,
		toLpCity: 1,
		isTpackage: 0,
		stat: '',
		sort: '',
		start: 1,
		pageNum: 1,
		newKeyword: '',
		scId: 91,
		lcCity: 91,
		channelId: 432
	})
	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}


//猜你喜欢
export function getGuessList() {
	const url = 'https://zt.dujia.qunar.com/zts/cuofeng/api.php'
	const data = Object.assign({}, {
		act: 'get_recommand',
		city: getCity()
	})
	return jsonp(url, data)
}


//猜你喜欢详情
export function getGuessDetail(id) {
	const url = `https://touch.dujia.qunar.com/item?id=${id}&it=n_index_oversea_ser_visa_desti_theme_tejia_tejia_desti_theme_tejia_tejia_micro_travel_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia`

	// $.ajax({
	// 	url: url,
	// 	type: 'GET',
	// 	dataType: 'JSONP',
	// 	success: function (res) {
	// 		if (res.ret) {
	// 			// console.log(res.data)
	// 			// return res.data;
	// 		}
	// 	}
	// })


	const data = Object.assign({}, {
		act: 'get_recommand',
		city: getCity()
	})
	return jsonp(url, data)
}
