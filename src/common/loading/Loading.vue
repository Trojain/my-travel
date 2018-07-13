<!-- loading加载中组件 -->
<template>
	<div class="loading">
		<img width="24" height="24" src="../../assets/images/loading.gif">
		<p class="desc">{{title}}</p>
	</div>
</template>
<script type="text/ecmascript-6">
export default {
    props: {
        title: {
            type: String,
            default: "正在载入..."
        }
    }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.loading
	z-index 999
	position fixed
	top 0
	width 100%
	height 100%
	text-align center
	// background-color rgba(0, 0, 0, 0.3)
	img
		position fixed
		left 50%
		transform translate(-50%, 0)
		top 46%
	.desc
		width 100%
		position fixed
		top 50%
		line-height 20px
		font-size 12px
		color #aaa
</style>
