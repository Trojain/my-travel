<!-- 返回按钮 -->
<template>
	<div class="goback" @click="goback">
		<i class="iconfont back-icon">&#xe624;</i>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "goback",
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped lang="stylus">
.goback
	z-index 4
	position absolute
	left 0.2rem
	top 0.2rem
	width 0.7rem
	height 0.7rem
	line-height 0.7rem
	border-radius 50%
	text-align center
	background rgba(0, 0, 0, 0.8)
	.back-icon
		color #fff
		font-size 0.3rem
		margin-right 0.06rem
</style>
