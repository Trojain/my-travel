<!-- 城市选择头部组件 -->
<template>
    <div class="header">
        城市选择
		<router-link to="/">
        	<div class="iconfont back-icon">&#xe624;</div>
		</router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header
	height 0.86rem
	line-height 0.86rem
	overflow hidden
	text-align center
	color #fff
	background $bgColor
	font-size 0.32rem
	position relative
	.back-icon
		position absolute
		top 0
		width 0.64rem
		text-align center
		font-size 0.4rem
		color #fff
</style>
