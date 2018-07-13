// 获取min到max之间的随机数(包含max)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// 打乱数组   随机播放
export function shuffle(arr) {
	let _arr = arr.slice()
	for (let i = 0; i < _arr.length; i++) {
		let j = getRandomInt(0, i)
		let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
	}
	return _arr
}

// 搜索截流  不会多次触发
export function debounce(func, delay) {
	let timer
	return function (...args) {
		if (timer) {
			clearTimeout(timer)
		}
		// 延迟执行func函数
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}
