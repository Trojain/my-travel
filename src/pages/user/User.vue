<!-- 个人中心 -->
<template>
	<div class="user">
		<header-bar :rightShow='rightShow'></header-bar>
		<header class="clearfix">
			<div class="fl">
				<!-- iconfont彩色图片 -->
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-touxiang"></use>
				</svg>
			</div>
			<div class="fl userinfo">
				<p class="username">13000000000</p>
				<span class="logout" @click="logout">退出</span>
			</div>
			<i class="iconfont">&#xe605;</i>
		</header>

		<card :header="{title: cardheader}">
			<div slot="content" class="card-demo-flex">
				<div class="vux-1px-r">
					<span class="iconfont">&#xe602;</span>
					<badge text="1"></badge>
					<br/> 待付款
				</div>
				<div class="vux-1px-r">
					<span class="iconfont">&#xe60d;</span>
					<badge text="3"></badge>
					<br/> 待收货
				</div>
				<div class="vux-1px-r">
					<span class="iconfont">&#xe603;</span>
					<badge text="2"></badge>
					<br/> 待评价
				</div>
				<div>
					<span class="iconfont">&#xe621;</span>
					<br/> 退款/售后
				</div>
			</div>
		</card>

		<section class="center-nav">
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe704;</i>
					<span class="title">订单</span>
					<div class="fr">
						<badge></badge>
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe61a;</i>
					<span class="title">卡券</span>
					<div class="fr">
						<span>12</span>张
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe6a4;</i>
					<span class="title">余额</span>
					<div class="fr">
						<span>￥120</span>
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe636;</i>
					<span class="title">活动</span>
					<div class="fr">
						<badge text="2"></badge>
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe610;</i>
					<span class="title">消息</span>
					<div class="fr">
						<badge text="99.."></badge>
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe663;</i>
					<span class="title">其他</span>
					<div class="fr">
						<!-- <span>12</span>张 -->
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
			<div class="menu-wrapper">
				<div class="center-block">
					<i class="iconfont menu-icon">&#xe68a;</i>
					<span class="title">设置</span>
					<div class="fr">
						<!-- <span>12</span>张 -->
						<i class="iconfont">&#xe65e;</i>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script type="text/ecmascript-6">
import HeaderBar from "common/headerBar/HeaderBar";
import { Divider, Card, Badge } from "vux";
import { mapMutations } from "vuex";
import "styles/iconfont/iconfont.js"; //iconfont彩色图片才需引入
export default {
    name: "user",
    data() {
        return {
            cardheader: "我的订单",
            rightShow: "&#xe605;"
        };
    },
    methods: {
        ...mapMutations({
            changeMobile: "SET_MOBILE"
        }),
        logout() {
            this.changeMobile("");
            localStorage.removeItem("_mobile_");
            this.$router.push({ path: "/" });
        }
    },
    components: {
        HeaderBar,
        Card,
        Divider,
        Badge
    }
};
</script>

<style scoped lang="stylus">
.card-demo-flex
	display flex
	padding 10px 0
	.iconfont
		color #f74c31
		font-size 22px
		margin-left 4px
	> div
		flex 1
		text-align center
		font-size 12px
		line-height 22px
		position relative
	.vux-badge-single
		position absolute
		top -0.1rem
		right 0.5rem
.vux-1px-r
	border-right 1px solid #ddd
.user
	background-color #ebebeb
header
	background-color #303030
	color #fff
	padding 40px 15%
	.iconfont
		font-size 0.44rem
		position absolute
		top 20px
		right 12px
	.icon
		width 50px
		height 50px
		fill currentColor
		overflow hidden
	.userinfo
		margin 0 20px
		.username
			font-size 16px
			line-height 32px
		.logout
			font-size 12px
			color #ffbd80
.menu-wrapper
	width 100%
	margin 10px 0
	line-height 52px
	background-color #fff
	cursor pointer
	font-size 12px
	color #222
	.center-block
		margin 0 12px
		.menu-icon
			font-size 22px
			color #7bcdcc
		.title
			font-size 14px
			line-height 20px
			position relative
			top -2px
			left 10px
		.fr
			span
				color #e7a858
			.vux-badge
				color #fff
			i
				font-size 12px
</style>
