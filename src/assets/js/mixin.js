// 组件中插入外部属性  组件中的属性会覆盖mixin中的属性
// 相当于对组件属性的补充  避免不同组件重复代码
// 共享组件之间的js逻辑

import {mapGetters, mapMutations, mapActions} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

// 播放器底部播放适配公用部分
export const playlistMixin = {
	computed: {
		...mapGetters([
			'playList'
		])
	},
	mounted() {
		this.handlePlaylist(this.playList)
	},
	activated() {
		this.handlePlaylist(this.playList)
	},
	watch: {
		playList(newVal) {
			this.handlePlaylist(newVal)
		}
	},
	methods: {
		// 由组件中定义handlePlaylist函数 覆盖这个函数
		// 这里不做逻辑处理 组件若没有这个函数则直接抛出异常
		handlePlaylist() {
			throw new Error('component must implement handlePlaylist method')
		}
	}
}

// 歌曲列表公用部分
export const playerMixin = {
	computed: {
		iconMode() {
			return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
		},
		...mapGetters([
			'sequenceList',
			'playList',
			'currentSong',
			'mode',
			'favoriteList'
		])
	},
	methods: {
		changeMode() {
			const mode = (this.mode + 1) % 3
			this.setPlayMode(mode)
			let list = null
			if (mode === playMode.random) {
				list = shuffle(this.sequenceList)
			} else {
				list = this.sequenceList
			}
			this.resetCurrentIndex(list)
			this.setPlaylist(list)
		},
		resetCurrentIndex(list) {
			let index = list.findIndex((item) => {
				return item.id === this.currentSong.id
			})
			this.setCurrentIndex(index)
		},
		// 切换收藏
		toggleFavorite(song) {
			if (this.isFavorite(song)) {
				this.deleteFavoriteList(song)
			} else {
				this.saveFavoriteList(song)
			}
		},
		// 收藏样式
		getFavoriteIcon(song) {
			if (this.isFavorite(song)) {
				return 'icon-favorite'
			}
			return 'icon-not-favorite'
		},
		// 是否被收藏
		isFavorite(song) {
			const index = this.favoriteList.findIndex((item) => {
				return item.id === song.id
			})
			return index > -1
		},
		...mapMutations({
			setPlayMode: 'SET_MODE',
			setPlaylist: 'SET_PLAYLIST',
			setCurrentIndex: 'SET_CURRENT_INDEX',
			setPlayingState: 'SET_PLAYING_STATE',
		}),
		...mapActions([
			'saveFavoriteList',
			'deleteFavoriteList'
		])
	}
}

//歌曲搜索公用部分
export const searchMixin = {
	data() {
		return {
			query: '',
			refreshDelay: 100
		}
	},
	computed: {
		...mapGetters([
			'searchHistory'
		])
	},
	methods: {
		onQueryChange(query) {
			this.query = query
		},
		blurInput() {
			this.$refs.searchBox.blur()
		},
		addQuery(query) {
			this.$refs.searchBox.setQuery(query)
		},
		saveSearch() {
			this.saveSearchHistory(this.query)
		},
		...mapActions([
			'saveSearchHistory',
			'deleteSearchHistory'
		])
	}
}
