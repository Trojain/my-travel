<!-- 详情页 列表 -->
<template>
	<div v-if="this.details.dailySchedules">
		<ul class="list">
			<li class="item">
				<div class="sticky-bar sticky-bar-route">
					<div class="day">
						第1天
					</div>
				</div>
				<h2 class="title">{{this.details.dailySchedules[0].dayTitle}}</h2>
				<ul class="route-list">
					<li class="item group">
						<h5 class="sub-tit">集合信息</h5>
						<div class="txt-box">
							<p class="regular-txt">集合时间:{{this.details.product.gatherTime}}</p>
							<p class="regular-txt">集合地点:{{this.details.product.gatherSpot}}</p>
							<div class="richtext-format regular-txt ">
								集合详情:
								<div v-html="this.details.product.assembly"></div>
							</div>
							<p class="sub-txt space-line">说明：出团时间、地点仅供参考，具体以出团通知为准</p>
						</div>
					</li>
					<li class="item hotel">
						<h5 class="sub-tit">入住酒店</h5>
						<p class="sub-txt space-line">说明：具体以实际安排为准</p>
						<ul class="product-list">
							<li class="g-flexbox item">
								<img class="pic" src="https://userimg.qunarzz.com/imgs/201412/03/4e9-IV0aNuRgxHVl0480.jpg">
								<div class="flex cont">
									<p class="tit">{{this.details.dailySchedules[0].hotelList[0].name}}</p>
									<div class="tag-list">
										<span class="g-tag">
											<span class="txt">{{this.details.dailySchedules[0].hotelList[0].levelCn}}</span>
										</span>
									</div>
									<p class="sub-txt">
										<span class="iconfont ">&#xe60f;</span>{{this.details.dailySchedules[0].hotelList[0].address}}
									</p>
								</div>
								<div class="iconfont">&#xe65e;</div>
							</li>
						</ul>
					</li>
					<li class="item food">
						<h5 class="sub-tit">早餐：{{this.details.dailySchedules[0].breakFastDesc}}</h5>
						<h5 class="sub-tit">午餐：{{this.details.dailySchedules[0].lunchDesc}}</h5>
						<h5 class="sub-tit">晚餐：{{this.details.dailySchedules[0].dinnerDesc}}</h5>
					</li>
					<li class="item info">
						<h5 class="sub-tit">行程介绍</h5>
						<div class="richtext-format txt-box ">
							<div v-html="this.details.dailySchedules[0].description"></div>
						</div>
					</li>
					<li class="item other">
						<h5 class="sub-tit">
							<span class="txt">其他</span>
						</h5>
						<p class="txt-box"></p>
					</li>
				</ul>
			</li>

			<li class="item" v-for="(item,index) in this.details.dailySchedules" :key="index" v-if="index>0">
				<div class="sticky-bar sticky-bar-route">
					<div class="day">
						第{{index+1}}天
					</div>
				</div>
				<h2 class="title">{{item.dayTitle}}</h2>
				<ul class="route-list">
					<li class="item hotel" v-if="item.hotelList">
						<h5 class="sub-tit">入住酒店</h5>
						<p class="sub-txt space-line">说明：具体以实际安排为准</p>
						<ul class="product-list">
							<li class="g-flexbox item">
								<img class="pic" src="https://userimg.qunarzz.com/imgs/201412/03/4e9-IV0aNuRgxHVl0480.jpg">
								<div class="flex cont">
									<p class="tit">{{item.hotelList[0].name}}</p>
									<div class="tag-list">
										<span class="g-tag">
											<span class="txt">{{item.hotelList[0].levelCn || '五星级'}}</span>
										</span>
									</div>
									<p class="sub-txt">
										<span class="iconfont ">&#xe60f;</span>{{item.hotelList[0].address}}
									</p>
								</div>
								<div class="iconfont">&#xe65e;</div>
							</li>
						</ul>
					</li>
					<li class="item food">
						<h5 class="sub-tit">早餐：{{item.breakFastDesc}}</h5>
						<h5 class="sub-tit">午餐：{{item.lunchDesc}}</h5>
						<h5 class="sub-tit">晚餐：{{item.dinnerDesc}}</h5>
					</li>
					<li class="item info">
						<h5 class="sub-tit">行程介绍</h5>
						<div class="richtext-format txt-box ">
							<div v-html="item.description"></div>
						</div>
					</li>
				</ul>
			</li>
		</ul>
		<div class="m-route feature">
			<h2 class="title">线路特色</h2>
			<div v-html="this.details.product.feature"></div>
		</div>
	</div>
</template>

<script>
export default {
    name: "DetailList",
    // props: ["details"],
    props: {
        details: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.richtext-format
	word-wrap break-word
.sub-txt
	font-size 12px
	color #9e9e9e
.g-flexbox, .g-flexbox-start, .g-flexbox-column
	display flex
.feature
	padding 0 20px 30px
	background-color #fff
	color #616161
	line-height 20px
	border-top 10px solid #f5f5f5
.title
	padding 25px 13% 15px
	margin 0 auto
	font-size 18px
	text-align center
	font-weight 400
	background-color #fff
	color #212121
.flex
	flex 1
	width 100%
	height auto
	display block
.list
	.item
		line-height 20px
		margin-bottom 10px
		.sticky-bar
			position -webkit-sticky
			position sticky
			z-index 3
			background-color #fff
			height 27px
			border-top 1px solid #ff9800
			.day
				position absolute
				top 0
				left 0
				z-index 1
				width 110px
				height 27px
				line-height 27px
				padding-left 22px
				text-align left
				font-size 16px
				font-weight 500
				color #fff
				background url('//s.qunarzz.com/vacation_react/detail/bg.png') no-repeat 0 0
				background-size 223px 115px
		.route-list
			padding-left 27px
			.item
				padding 0 15px 30px 27px
				position relative
				font-size 14px
				.sub-tit
					margin-bottom 5px
					font-size 16px
					font-weight 500
					color #212121
				.txt-box
					font-size 14px
					padding-top 3px
					margin-bottom 5px
					color #616161
					.regular-txt
						margin-bottom 3px
						font-size 14px
						color #212121
					.regular-txt
						margin-bottom 3px
						font-size 14px
						color #212121
		.product-list
			padding-top 5px
			margin-bottom -5px
			.item
				border-radius 2px
				overflow hidden
				background-color #fafafa
				margin 10px 0
				padding 0
				.pic
					width 80px
					height 80px
					margin-right 10px
					border-radius 2px
				.tit
					font-size 16px
					margin-bottom 1px
					overflow hidden
					white-space nowrap
					text-overflow ellipsis
					color #212121
					font-weight 400
					padding 8px 0
				.tag-list
					margin-bottom 8px
					height 18px
					overflow hidden
					.g-tag
						height 15px
						line-height 1
						display inline-block
						margin-right 8px
						padding 2px 3px 1px
						text-align center
						color #ff8300
						font-weight 500
						position relative
						border-radius 2px
						&:after
							pointer-events none
							position absolute
							z-index 3
							top 0
							left 0
							content ' '
							border-color #ff8300
							border-style solid
							border-width 1px
							transform-origin 0 0
							width 300%
							height 300%
							transform scale(0.3333)
							-webkit-border-radius 6px
							border-radius 6px
						.txt
							vertical-align top
							display inline-block
							font-size 12px
							transform scale(0.83333)
							white-space nowrap
				.sub-txt
					.iconfont
						margin-right 10px
</style>


