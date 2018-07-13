<!-- 详情页-头部banner -->
<template>
	<div>
		<div class="banner" @click="handleBanner">
			<swiper :options="swiperOption" v-if="bannerImg">
				<swiper-slide v-for="item in gallaryImgs" :key="item.id">
					<a :href="item.url">
						<img class="swiper-img banner-img" v-lazy="item">
					</a>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>

			<div class="banner-info">
				<span class="banner-title">{{sightName}}</span>
				<p class="banner-number">
					<span class="iconfont banner-icon">&#xe679;</span>
					{{gallaryImgs.length}}
				</p>
			</div>
		</div>
		<fade-animation>
			<common-gallary :imgs="gallaryImgs" v-show="showGallay" @close="closeGallary"></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
// common/ 指的是 /src/common 在/build/webpack.base.conf.js 配置
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
    name: "DetailBanner",
    props: ["sightName", "bannerImg", "gallaryImgs"],
    data() {
        return {
            showGallay: false,
            swiperOption: {
                pagination: ".swiper-pagination", // 小圆点
                loop: true, // 循环轮播
                autoplay: 5000 //自动轮播
            }
        };
    },
    methods: {
        handleBanner() {
            this.showGallay = true;
        },
        closeGallary() {
            this.showGallay = false;
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.banner
	position relative
	overflow hidden
	height 0
	padding-bottom 66.66%
	.banner-img
		width 100%
	.banner-info
		z-index 2
		display flex
		position absolute
		left 0
		right 0
		bottom 0
		line-height 0.6rem
		color #fff
		background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
		.banner-title
			flex 1
			font-size 0.2rem
			padding 0 0.2rem
		.banner-number
			height 0.4rem
			line-height 0.4rem
			margin-top 0.08rem
			padding 0 0.4rem
			font-size 0.24rem
			border-radius 0.2rem
			background rgba(0, 0, 0, 0.8)
		.banner-icon
			font-size 0.2rem
			margin-right 0.1rem
</style>

