<!-- 详情页-头部banner -->
<template>
	<div>
		<div class="banner" @click="handleBanner">
			<swiper :aspect-ratio="375/562.5" auto loop :interval='interval'>
				<swiper-item v-for="(item, index) in gallaryImgs" :key="index">
					<a>
						<img class="swiper-img banner-img previewer-demo-img" v-lazy="item" @click="show(index)">
					</a>
				</swiper-item>
			</swiper>
			<div class="banner-info">
				<span class="banner-title">{{sightName}}</span>
				<p class="banner-number">
					<span class="iconfont banner-icon">&#xe679;</span>
					{{gallaryImgs.length}}
				</p>
			</div>
		</div>
		<div v-transfer-dom>
			<previewer :list="gallaryImgs" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperItem, Previewer, TransferDom } from "vux";
export default {
    name: "DetailBanner",
    props: ["sightName", "bannerImg", "gallaryImgs"],
    data() {
        return {
            showGallay: false,
            interval: 5000,
            options: {
                getThumbBoundsFn(index) {
                    let thumbnail = document.querySelectorAll(
                        ".previewer-demo-img"
                    )[index];
                    let pageYScroll =
                        window.pageYOffset ||
                        document.documentElement.scrollTop;
                    let rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            }
        };
    },
    methods: {
        handleBanner() {
            this.showGallay = true;
        },
        closeGallary() {
            this.showGallay = false;
        },
        logIndexChange(arg) {
            console.log(arg);
        },
        show(index) {
            this.$refs.previewer.show(index);
        }
    },
    directives: {
        TransferDom
    },
    components: {
        Swiper,
        SwiperItem,
        Previewer
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
>>>.vux-slider > .vux-indicator, .vux-slider .vux-indicator-right
	bottom 5px
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
			// margin-top 0.08rem
			padding 0 0.4rem
			font-size 0.24rem
			border-radius 0.2rem
			background rgba(0, 0, 0, 0.8)
			position: relative;
			top: -0.4rem;
			left: -0.2rem;
		.banner-icon
			font-size 0.2rem
			margin-right 0.1rem
</style>

