<!-- 推荐 -->
<template>
	<div class="recommend">
		<p class="title">热销推荐</p>
		<ul>
			<li v-for="i in list" :key="i.id" class="item">
				<a :href="'https://m.ly.com/dujia/tours/'+i.id+'.html'">
					<div class="item-img-box">
						<img class="item-img" v-lazy="i.absImgURL">
					</div>
					<div class="item-info-box">
						<p class="item-title">{{i.title}}</p>
						<p class="item-desc">{{i.subTitle}}</p>
						<p class="item-price">
							<span>￥
								<i>{{i.tcPrice}}</i>
							</span>起</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: "HomeRecommend",
    props: ["list"],
    data() {
        return {};
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.recommend
	padding 0.4rem 0
	margin 0 0.4rem
	border-top 1px solid #f1f1f1
	.title
		font-size 0.32rem
		color #111111
		font-weight normal
		margin-bottom 0.3rem
	.title:before
		content ''
		display inline-block
		height 0.38rem
		width 0.1rem
		background-color #ff9d00
		vertical-align middle
		margin 0 0.15rem 0.05rem 0
	.item
		display block
		margin 0.26rem 0
		clearfix()
		.item-img-box
			float left
			width 30%
			margin-right 4%
			.item-img
				height 1.6rem
				width 100%
		.item-info-box
			float left
			width 64%
			.item-title
				font-size 0.29rem
				color #222
				ellipsis()
			.item-desc
				font-size 0.25rem
				color #a5a5a5
				line-height 0.36rem
				height 0.65rem
				margin 0.18rem 0
				ellipsis_n(2)
			.item-price
				color $priceColor
				i
					font-size 0.34rem
					display inline-block
					margin-right 0.04rem
</style>
