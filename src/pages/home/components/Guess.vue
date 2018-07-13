<!-- 猜你喜欢 -->
<template>
	<div class="guess" v-if="list.length">
		<p class="title">猜你喜欢</p>
		<ul class="item-box">
			<router-link tag="li" v-for="i in list" :key="i.product_id" :to="'/detail/'+i.product_id" class="item">
				<img class="item-img" v-lazy="i.pic">
				<p class="item-title">{{i.short_title}}</p>
				<div class="item-info-box">
					<span class="item-price">￥
						<i>{{i.price}}起</i>
					</span>
					<span class="item-sell" v-html="sell(i.product_id)"></span>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
    name: "HomeGuess",
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    },
    methods: {
        sell(i) {
            var str = i + "";
            return str.substr(str.length - 4) + "人购买";
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.guess
	padding 0.4rem 0
	margin 0 0.4rem
	border-top 1px solid #f1f1f1
	.title
		font-size 0.32rem
		color #111111
		font-weight normal
		margin-bottom 0.3rem
		&:before
			content ''
			display inline-block
			height 0.38rem
			width 0.1rem
			background-color #ff9d00
			vertical-align middle
			margin 0 0.15rem 0.05rem 0
	.item
		width 100%
		margin-bottom 6%
		.item-img
			width 100%
		.item-title
			color $darkTextColor
			font-weight 400
			font-size 0.25rem
			line-height 0.36rem
			margin 0.18rem 0.1rem
			ellipsis_n(2)
		.item-info-box
			margin 0.1rem
			clearfix()
			.item-price
				float left
				color $priceColor
				i
					font-size 0.34rem
			.item-sell
				float right
				color #a5a5a5
</style>
