<!-- 个人中心 -->
<template>
	<div class="user">
		<go-back></go-back>
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
		</header>

		<card :header="{title: cardheader}">
			<div slot="content" class="card-demo-flex card-demo-content01">
				<div class="vux-1px-r">
					<span>1130</span>
					<br/> 金豆
				</div>
				<div class="vux-1px-r">
					<span>12</span>
					<br/> 卡券
				</div>
				<div class="vux-1px-r">
					<span>0</span>
					<br/> E卡
				</div>
				<div>
					<span>88</span>
					<br/> 七天待还
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
import GoBack from "common/goBack/GoBack";
import { Divider, Card, Badge } from "vux";
import { mapMutations } from "vuex";
import "styles/iconfont/iconfont.js"; //iconfont彩色图片才需引入
export default {
    name: "user",
    data() {
        return {
            cardheader: "我的钱包"
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
        GoBack,
        Card,
        Divider,
        Badge
    }
};
</script>

<style scoped lang="stylus">
.card-demo-flex
	display flex
.card-demo-content01
	padding 10px 0
.card-padding
	padding 15px
.card-demo-flex > div
	flex 1
	text-align center
	font-size 12px
	line-height 22px
.card-demo-flex span
	color #f74c31
.vux-1px-r
	border-right 1px solid #ddd
.user
	background-color #ebebeb
header
	background-color #303030
	color #fff
	padding 36px 12px 24px 10%
	.icon
		width 100px
		height 100px
		fill currentColor
		overflow hidden
	.userinfo
		margin 20px 40px
		.username
			font-size 16px
			line-height 40px
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
