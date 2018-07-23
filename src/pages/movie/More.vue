<template>
	<div class="more">
		<transition name="show">
			<div class="more-box" v-show="isMore">
				<ul>
					<li>首页<i class="iconfont back-icon">&#xe65e;</i></li>
					<li>影片<i class="iconfont back-icon">&#xe65e;</i></li>
					<li>影院<i class="iconfont back-icon">&#xe65e;</i></li>
					<li>商城<i class="iconfont back-icon">&#xe65e;</i></li>
					<li>我的<i class="iconfont back-icon">&#xe65e;</i></li>
				</ul>
			</div>
		</transition>
		<transition name="screen">
			<div class="screen" @click="screenClick" v-show="isMore"></div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    props: {
        isMore: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        screenClick() {
            this.$emit("hideMore");
        }
	}
};
</script>

<style scoped lang="stylus">
.show-enter, .show-leave-to
	transform translate3d(-100%, 0, 0)
.show-enter-active, .show-leave-active
	transition all 0.5s
.screen-enter, .screen-leave-to
	opacity 0
.screen-enter-active, .screen-leave-active
	transition all 0.5s
.more-box
	position fixed
	top 42px
	left -25%
	background #282828
	width 100%
	height 100%
	z-index 2
	ul
		color #fff
		margin-left 25%
		li
			line-height 50px
			padding 0 16px
			border-bottom 1px dotted #333
			color #9a9a9a
			font-size 14px
			.iconfont
				float right
.screen
	position fixed
	top 0
	left 0
	background rgba(0, 0, 0, 0.7)
	width 100%
	height 100%
	z-index 1
</style>
