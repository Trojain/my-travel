<template>
	<div class="movie">
		<more :isMore="isMore" @hideMore="hide()"></more>
		<fix-header title="电影" :rightShow="true" @more="showMore"></fix-header>
		<section style="margin-top:46px">
			<header>
				<h2>{{hotName}}</h2>
				<span>更多</span>
			</header>
			<ul class="row" v-if="hotList">
				<li class="item" v-for="(item,index) in hotList" :key="index">
					<router-link :to="'/movie/'+item.id">
						<img v-lazy="hotImg[index]" class="item-poster">
						<span class="item-title">{{item.title}}</span>
						<div class="item-rating" v-if="item.rating">
							<rate :score="halfHotRate[index]" :fontSize="'font-size:12px'"></rate>
							<span>{{hotRate[index]}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section>
			<header>
				<h2>{{freeName}}</h2>
				<span>更多</span>
			</header>
			<ul class="row" v-if="freeList">
				<li class="item" v-for="(item,index) in freeList" :key="index">
					<router-link :to="'/movie/'+item.id">
						<img v-lazy="freeImg[index]" class="item-poster">
						<span class="item-title">{{item.title}}</span>
						<div class="item-rating">
							<rate :score="halfFreeRate[index]" :fontSize="'font-size:12px'"></rate>
							<span>{{freeRate[index]}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section style="padding-bottom: 50px">
			<header>
				<h2>{{newName}}</h2>
				<span>更多</span>
			</header>
			<ul class="row" v-if="newList">
				<li class="item" v-for="(item,index) in newList" :key="index">
					<router-link :to="'/movie/'+item.id">
						<img v-lazy="newImg[index]" class="item-poster">
						<span class="item-title">{{item.title}}</span>
						<div class="item-rating">
							<rate :score="halfNewRate[index]" :fontSize="'font-size:12px'"></rate>
							<span>{{newRate[index]}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<my-footer></my-footer>
	</div>
</template>

<script type="text/ecmascript-6">
import More from "./More";
import Rate from "common/rate/Rate";
import FixHeader from "common/fixHeader/FixHeader";
import MyFooter from "common/footer/MyFooter";
import { getMovieShowing, getMovieFree, getMovieLatest } from "api/movie";
export default {
    name: "",
    data() {
        return {
            hotName: "",
            hotList: [],
            hotRate: [],
            hotImg: [],
            freeName: "",
            freeList: [],
            freeRate: [],
            freeImg: [],
            newName: "",
            newList: [],
            newRate: [],
            newImg: [],
            isMore: false
        };
    },
    components: { Rate, More, FixHeader, MyFooter },
    computed: {
        halfHotRate() {
            return this.hotRate.map(function(i) {
                return Math.round(i / 2 * 10) / 10;
            });
        },
        halfFreeRate() {
            return this.freeRate.map(function(i) {
                return Math.round(i / 2 * 10) / 10;
            });
        },
        halfNewRate() {
            return this.newRate.map(function(i) {
                return Math.round(i / 2 * 10) / 10;
            });
        }
    },
    methods: {
        // 解决403图片缓存问题
        getImages(_url) {
            if (_url !== undefined) {
                let _u = _url.substring(7);
                return "https://images.weserv.nl/?url=" + _u;
            }
        },
        showMore() {
            this.isMore = !this.isMore;
        },
        hide() {
            this.isMore = false;
        }
    },
    activated() {
        getMovieShowing().then(res => {
            if (res.start == 0) {
                this.hotName = res.subject_collection.name;
                this.hotList = res.subject_collection_items;
                res.subject_collection_items.forEach(item => {
                    this.hotImg.push(this.getImages(item.cover.url));
                    if (item.rating) {
                        this.hotRate.push(item.rating.value);
                    } else {
                        this.hotRate.push(0);
                    }
                });
            }
        });
        getMovieFree().then(res => {
            if (res.start == 0) {
                this.freeName = res.subject_collection.name;
                this.freeList = res.subject_collection_items;
                res.subject_collection_items.forEach(item => {
                    this.freeImg.push(this.getImages(item.cover.url));
                    if (item.rating) {
                        this.freeRate.push(item.rating.value);
                    } else {
                        this.freeRate.push(0);
                    }
                });
            }
        });
        getMovieLatest().then(res => {
            if (res.start == 0) {
                this.newName = res.subject_collection.name;
                this.newList = res.subject_collection_items;
                res.subject_collection_items.forEach(item => {
                    this.newImg.push(this.getImages(item.cover.url));
                    if (item.rating) {
                        this.newRate.push(item.rating.value);
                    } else {
                        this.newRate.push(0);
                    }
                });
            }
        });
    },
    deactivated() {
        this.isMore = false;
    }
};
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'
.el-rate
	display inline-block
>>>.el-rate__icon
	font-size 12px
	margin-right 0
>>>.vux-header
	background-color #00bcd4
	position fixed
	top 0
	width 100%
	.vux-header-back
		color #fff !important
	.vux-header-left .left-arrow:before
		border 1px solid #fff
		border-width 1px 0 0 1px
	.vux-header-more
		color #fff !important
.overwrite
	font-size 24px
	font-weight bold
	color #fff
section
	border-bottom 1px solid #F2F2F2
	header
		padding 20px 14px
		clearfix()
		h2
			float left
			display inline-block
			min-width 1em
			margin-bottom 0
			font-size 18px
			color #111
			padding-left 0
			padding-bottom 0
			font-size 18px
		span
			float right
			font-size 14px
			line-height 20px
			color #42bd56
	.row
		.item
			display inline-block
			vertical-align top
			text-align center
			width 27%
			margin 0 3%
			img
				width 100%
				height 150px
			.item-title
				ellipsis()
				font-size 14px
				margin 12px auto 4px
				display block
			.item-rating
				margin-bottom 20px
				span
					font-size 12px
					position relative
					top 1px
</style>
