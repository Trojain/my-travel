<!-- 首页分类图标 -->
<template>
	<ul class="icons">
		<swiper :aspect-ratio="190/360" loop dots-position="center">
			<swiper-item v-for="(i, index) in pages" :key="index">
				<li class="icon" v-for="item in i" :key="item.id" @click="show(item.desc)">
					<div class="icon-imgs">
						<img class="icon-imgcontent" v-lazy="item.imgUrl" />
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</li>
			</swiper-item>
		</swiper>
	</ul>
</template>
<script>
import { Swiper, SwiperItem } from "vux";
export default {
    name: "HomeIcons",
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        show(desc) {
            console.log(desc);
            if (desc == "电影") {
                this.$router.push("/movie");
            }
        }
    },
    computed: {
        pages() {
            const pages = [];
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons>>>.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active
	background-color #00bcd4
.icon
	position relative
	overflow hidden
	float left
	width 25%
	height 0
	padding-bottom 25%
	.icon-imgs
		position absolute
		top 0
		left 0
		right 0
		bottom 0.44rem
		box-sizing border-box
		padding 0.18rem
		.icon-imgcontent
			display block
			margin 0 auto
			height 100%
	.icon-desc
		position absolute
		left 0
		right 0
		bottom 0
		height 0.44rem
		line-height 0.44rem
		text-align center
		ellipsis()
</style>
