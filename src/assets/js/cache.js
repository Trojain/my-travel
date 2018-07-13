// 缓存

// 引入storage的第三方库
import storage from 'good-storage'

const CITY_KEY = '_city_' // 播放历史

// 设置缓存城市
export function setCity(val) {
	storage.set(CITY_KEY, val)
	return val
}


// 获取缓存城市
export function getCity() {
	return storage.get(CITY_KEY, '北京') // 默认北京
}
