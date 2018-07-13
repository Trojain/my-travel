// actions用来提交异步或多事件批量处理




// // 选择播放
// export const selectPlay = function ({ commit, state }, { list, index }) {
// 	// 多事件批量处理 提交mutation
// 	commit('SET_SEQUENCE_LIST', list)
// 	if (state.mode === playMode.random) {
// 		let randomList = shuffle(list)
// 		commit('SET_PLAYLIST', randomList)
// 		index = findIndex(randomList, list[index])
// 	} else {
// 		commit('SET_PLAYLIST', list)
// 	}
// 	commit('SET_CURRENT_INDEX', index)
// 	commit('SET_FULL_SCREEN', true)
// 	commit('SET_PLAYING_STATE', true)
// }



// // 收藏
// export const saveFavoriteList = function ({ commit }, song) {
// 	commit('SET_FAVORITE_LIST', saveFavorite(song))
// }

// // 取消收藏
// export const deleteFavoriteList = function ({ commit }, song) {
// 	commit('SET_FAVORITE_LIST', deleteFavorite(song))
// }
