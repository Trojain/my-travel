// 歌曲播放模式

import { getCity } from 'js/cache'

const state = {
	// singer: {}, // 歌手详情
	city: getCity(), // 默认从缓存中获取城市
}

export default state








//获取localStorage中存储的city
//try catch 防止报错
// let defaultCity = '北京'
// try {
// 	if (localStorage.city) {
// 		defaultCity = localStorage.city
// 	}
// } catch (e) {}

// export default {
// 	city: defaultCity
// }
