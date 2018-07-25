<template>
	<footer class="footer">
		<ul class="flex">
			<router-link tag="li" to="/home" class="flex_item">
				<i class="iconfont">&#xe604;</i><br/> 首页
			</router-link>
			<router-link tag="li" to="/city" class="flex_item">
				<i class="iconfont">&#xe661;</i><br/> 目的地
			</router-link>
			<router-link tag="li" to="/movie" class="flex_item">
				<i class="iconfont">&#xe64c;</i><br/> 电影
			</router-link>
			<router-link tag="li" to="/user" class="flex_item">
				<i class="iconfont">&#xe609;</i><br/> 我的
			</router-link>
		</ul>
	</footer>
</template>

<script type="text/ecmascript-6">
export default {
    name: "myfooter"
};
</script>

<style scoped lang="stylus">
.footer
	position fixed
	bottom 0
	width 100%
	text-align center
	background-color #fff
	border-top 1px solid #dbdbdb
	padding 0.12rem 0
	a
		color #9E9E9E
		font-size 0.26rem
	.router-link-active
		color #25a4bb
	.iconfont
		font-size 0.36rem
		display inline-block
		margin-bottom 0.1rem
		width 100%
</style>
