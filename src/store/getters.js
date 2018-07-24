// 映射

// 通常通过getters取数据 (this.$store.getters.city;)
export const city = state => state.city
export const mobile = state => state.mobile

// 类似计算属性 算出当前歌曲
// export const currentSong = (state) => {
// 	return state.playList[state.currentIndex] || {}
// }
