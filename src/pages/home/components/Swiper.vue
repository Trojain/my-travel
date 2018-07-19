<!-- 轮播 -->
<template>
	<div class="wrapper" v-if="showSwiper">
		<swiper :aspect-ratio="186/360" auto loop :interval='interval'>
			<swiper-item v-for="(item, index) in list" :key="index">
				<img class="swiper-img" :src="item.img" :title="item.title">
				<p>{{item.describe}}</p>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
export default {
    name: "HomeSwiper",
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    data() {
        return {
            interval: 5000
        };
    },
    computed: {
        showSwiper() {
            return this.list.length;
        }
    }
};
</script>

<style lang="stylus" scoped>
// >>>  样式穿透  样式不受scoped限制 可以更改其他组件样式
.wrapper>>>.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active
	background-color #FFF
.wrapper
	// 图片没加载出来依旧占留位置，下面的内容不会抖动
	overflow hidden
	width 100%
	height 0
	// 宽高比是51.73%
	padding-bottom 51.73%
	background #eee
	.swiper-img
		width 100%
	p
		position relative
		top -22px
		left 10px
		color #fff
</style>
