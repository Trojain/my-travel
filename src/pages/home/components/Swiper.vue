<!-- 轮播 -->
<template>
	<div class="wrapper" v-if="showSwiper">
		<swiper :options="swiperOption">
			<!-- slides -->
			<swiper-slide v-for="item in list" :key="item.id">
				<a :href="item.url">
					<img class="swiper-img" v-lazy="item.img" :title="item.title">
				</a>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: ".swiper-pagination", // 小圆点
                loop: true, // 循环轮播
                autoplay: 3000 //自动轮播
            }
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
.wrapper>>>.swiper-pagination-bullet-active
	background #fff
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
</style>
