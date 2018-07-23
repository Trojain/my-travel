<!-- 固定的头部 -->
<template>
	<div class="header-fixed">
		<i class="iconfont back-icon" @click="goBack">&#xe624;</i>
		{{title}}
		<span class="header-right iconfont" v-if="rightShow" @click="clickMore">&#xe629;</span>
	</div>
</template>

<script>
export default {
    name: "DetailHeader",
    props: {
        title: {
            type: String,
            default: ""
        },
        rightShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickMore() {
            this.$emit("more");
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header-fixed
	z-index 4
	position fixed
	top 0
	left 0
	width 100%
	height 0.86rem
	line-height 0.86rem
	text-align center
	color #fff
	background $bgColor
	font-size 0.32rem
	.back-icon
		position absolute
		left 0
		top 0
		width 0.64rem
		text-align center
		font-size 0.4rem
		color #fff
	.header-right
		color #fff
		font-weight bold
		width 0.8rem
		font-size 0.4rem
		position absolute
		right 0
</style>

