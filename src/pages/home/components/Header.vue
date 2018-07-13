<!-- 头部 -->
<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input" @click="inputClick">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
		<confirm ref="aaa" :text="text"></confirm>
	</div>
</template>

<script>
import Confirm from "common/confirm/Confirm";
import { mapGetters } from "vuex"; // 引入mapGetters
export default {
    name: "HomeHeader",
    data() {
        return {
            text: ""
        };
    },
    components: {
        Confirm
    },
    methods: {
        inputClick() {
            this.$refs.aaa.show();
            this.text = "暂无功能";
        }
    },
    computed: {
        // 用vuex读取数据(读取的是getters.js中的数据)
        // 相当于this.$store.getters.city(vuex语法糖)
        ...mapGetters(["city"]) // 直接使用this.city即可调用
    }
};
</script>

<style lang="stylus" scoped>
// 写法1：@import '../../../assets/styles/varibles.styl'
// 写法2：@import '~@/assets/styles/varibles.styl'
// 写法3:
// @ ：表示src目录 (build/webpack.base.config.js 中可配置)
@import '~styles/varibles.styl'
.header
	display flex
	height 0.86rem
	line-height 0.86rem
	background $bgColor
	color #fff
	.header-left
		width 0.64rem
		float left
		.back-icon
			text-align center
			font-size 0.4rem
	.header-input
		flex 1
		height 0.64rem
		line-height 0.64rem
		margin-top 0.12rem
		margin-left 0.2rem
		padding-left 0.2rem
		background #fff
		border-radius 0.1rem
		color #ccc
	.header-right
		min-width 1.04rem
		padding 0 0.1rem
		float right
		text-align center
		color #fff
		.arrow-icon
			margin-left -0.04rem
			font-size 0.24rem
</style>
