<!-- 电影详情 -->
<template>
	<div class="movieDetail">
		<h1 class="title">{{title}}</h1>
		<section class="subject-info clearfix">
			<div class="left">
				<div class="rating">
					<div class="item-rating">
						<el-rate v-model="halfRate" disabled text-color="#ff9900" score-template="{value}"></el-rate>
						<span>{{rate || '暂无评分'}}</span>
					</div>
					<p class="evaluate">{{count}}人评价</p>
				</div>
				<p class="meta">{{short_info}}</p>
			</div>
			<div class="right">
				<a href="">
					<img v-lazy="cover_img" :alt="title" class="cover">
				</a>
			</div>
		</section>

		<section id="channel_tags">
			<h2>所属频道</h2>
			<ul>
				<li class="channel_tag" v-for="item in tags" :key="item.id">
					<a href="/channel/30169652">{{item.name}}
						<span class="iconfont">&#xe65e;</span>
					</a>
				</li>
			</ul>
		</section>

		<section class="subject-intro">
			<h2>{{title}}的剧情简介</h2>
			<p v-html="desc" :class="{'ellipsis_3':ellipsis}"></p>
			<a class="expand" href="javascript:;" @click="expand" v-html="expandVal"></a>
		</section>

		<section class="" id="celebrities">
			<h2>影人</h2>
			<div class="section-content">
				<ul class="row items">
					<li class="item item__celebrity" v-for="(item,index) in performer" :key="index">
						<a href="https://movie.douban.com/celebrity/1349765/">
							<img class="item-poster" v-lazy="performerImg[index]">
							<span class="item-title name">{{item.name}}</span>
							<span class="item-title role">{{item.roles[0]}}</span>
						</a>
					</li>
				</ul>
			</div>
		</section>

		<section class="subject-comments">
			<h2>{{title}}的短评({{evaluateNum}})</h2>
			<div class="bd" id="comment-list">
				<ul data-reactroot="" class="list comment-list">
					<li class="" v-for="(item,index) in evaluateList" :key="index">
						<div class="desc">
							<a href="/people/175623093/"><img v-lazy="item.user.avatar" :alt="item.user.name"></a>
							<div class="user-info">
								<strong>{{item.user.name}}</strong>
								<div class="rating-stars">
									<el-rate v-model="evaluateRate[index]" disabled text-color="#ff9900" score-template="{value}"></el-rate>
									<span>{{evaluateRate[index]}}分</span>
								</div>
								<div class="date">{{item.create_time}}</div>
							</div>
						</div>
						<p v-html="item.comment"></p>
						<div class="btn-info">
							<div class="ic-btn ic-btn-like fl">
								<span class="iconfont">&#xe640;</span>
								<span class="text">{{item.vote_count}}</span>
							</div>
							<div class="ic-btn ic-btn-more fr">
								<span class="iconfont">&#xe67a;</span>
							</div>
						</div>
					</li>
					<li class="go-comment-list">
						<a href="/movie/subject/26752088/comments?from=subject">查看全部短评</a>
					</li>
				</ul>
			</div>
		</section>

		<section id="discussions-root">
			<div data-reactroot="" class="subject-forum-topics">
				<h2>讨论({{discussNum}})</h2>
				<ul class="list">
					<li v-for="item in discussList" :key="item.id">
						<a href="/movie/discussion/615675469">
							<h3>{{item.title}}</h3>
							<p class="info">{{item.comments_count}}回应</p>
						</a>
					</li>
					<li class="go-list">
						<a href="/movie/subject/26752088/discussions">查看全部讨论</a>
					</li>
				</ul>
			</div>
		</section>

	</div>
</template>

<script type="text/ecmascript-6">
import {
    getMovieDetail,
    getCelebrities,
    getInterests,
    getDiscuss
} from "api/movie";
export default {
    name: "movieDetail",
    data() {
        return {
            ellipsis: true,
            id: 0,
            title: "",
            rate: 0,
            count: 0,
            cover_img: "",
            short_info: "",
            tags: [],
            desc: "",
            performer: [],
            performerImg: [],
            evaluateNum: 0,
            evaluateList: [],
            evaluateRate: [],
            discussNum: 0,
            discussList: [],
            expandVal: '( 展开<span class="iconfont">&#xe608;</span> )'
        };
    },
    components: {},
    methods: {
        expand() {
            this.ellipsis = !this.ellipsis;
            if (this.ellipsis) {
                this.expandVal = `( 展开<span class="iconfont">&#xe608;</span> )`;
            } else {
                this.expandVal = `( 收起<span class="iconfont">&#xe606;</span> )`;
            }
        },
        // 解决403图片缓存问题
        getImages(_url) {
            if (_url !== undefined) {
                let _u = _url.substring(7);
                return "https://images.weserv.nl/?url=" + _u;
            }
        }
    },
    computed: {
        halfRate: {
            get: function() {
                return Math.round(this.rate / 2 * 10) / 10;
            },
            set: function() {}
        }
    },
    activated() {
        this.id = this.$route.params.id;
        // 电影详情
        getMovieDetail(this.id).then(res => {
            this.title = res.title;
            if (res.extra.rating_group.rating) {
                this.rate = res.extra.rating_group.rating.value;
                this.count = res.extra.rating_group.rating.count;
            }
            this.cover_img = res.cover_img.url;
            this.short_info = res.extra.short_info;
            this.tags = res.tags;
            this.desc = res.desc;
        });

        // 影人
        getCelebrities(this.id).then(res => {
            var tmp = [],
                tmpImg = [];
            if (res.credits) {
                for (let i = 0; i < res.credits.length; i++) {
                    for (
                        let n = 0;
                        n < res.credits[i].celebrities.length;
                        n++
                    ) {
                        tmp.push(res.credits[i].celebrities[n]);
                        tmpImg.push(
                            this.getImages(
                                res.credits[i].celebrities[n].cover_url
                            )
                        );
                    }
                }
            }
            this.performer = tmp;
            this.performerImg = tmpImg;
        });

        // 短评
        getInterests(this.id).then(res => {
            if (res.start == 0) {
                this.evaluateNum = res.total;
                this.evaluateList = res.interests;
                res.interests.forEach(item => {
                    this.evaluateRate.push(item.rating.star_count);
                });
            }
        });

        // 讨论
        getDiscuss(this.id).then(res => {
            if (res.start == 0) {
                this.discussNum = res.total;
                this.discussList = res.forum_topics;
            }
        });
    }
};
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'
.el-rate
	display inline-block
section
	margin-bottom 30px
section p
	font-size 15px
	word-wrap break-word
h1
	margin 30px 0 5px
	font-size 24px
	line-height 32px
	word-break break-all
h2
	color #42bd56
	margin 0 0 15px
	font-size 16px
.border-bottom1::after
	left 0
	bottom 0
	width 100%
	height 1px
	background #E8E8E8
	-webkit-transform scaleY(0.5)
	content ''
	position absolute
	-webkit-transform-origin 0 bottom
.movieDetail
	margin 0 18px
	.subject-info
		position relative
		margin-bottom 30px
		.left
			padding-bottom 30px
			margin-right 130px
			.evaluate
				margin 10px 0 16px
				font-size 14px
			.item-rating span
				font-size 16px
				position relative
				top 4px
			.meta
				color #494949
				font-size 14px
				line-height 1.6
		.right
			position absolute
			top 0
			right 0
			img
				width 100px
#channel_tags
	.channel_tag
		background-color #effaf0
		border 1px solid #42bd56
		display inline-block
		margin-right 10px
		font-size 13px
		padding 5px 10px
		border-radius 15px
		margin-bottom 10px
		.iconfont
			font-size 12px
			margin-left 2px
.subject-intro
	p
		font-size 14px
		line-height 20px
	.expand
		float right
#celebrities
	.items
		font-size 0
		white-space nowrap
		overflow-x auto
		-webkit-overflow-scrolling touch
		.item
			margin-left 0.48rem
			display inline-block
			vertical-align top
			width 100px
			text-align center
			margin-bottom 10px
			&:first-child
				margin-left 0
		.item__celebrity
			font-size 14px
			width 75px
			.item-poster
				width 100%
				height 110px
				overflow hidden
				background-size cover
				background-position center
			.item-title
				display -webkit-box
				overflow hidden
				-webkit-box-orient vertical
				-webkit-line-clamp 3
				font-size 14px
				line-height 1.5
				white-space normal
				text-align center
				color #494949
				margin-top 8px
				ellipsis()
			.role
				color #aaa
.subject-comments
	.list
		margin-right -18px
		li
			position relative
			padding 15px 18px 15px 0
			word-wrap break-word
			overflow hidden
			.desc
				font-size 0
				line-height normal
				margin 0 0 11px
				color #494949
				position relative
				a
					display inline
					img
						width 36px
						border-radius 50%
						vertical-align text-top
						margin-right 10px
						float left
				.user-info
					margin-left 40px
					strong
						font-size 15px
						display inline-block
						vertical-align text-top
						margin-right 6px
					.rating-stars
						display inline-block
						font-size 15px
						vertical-align text-top
						.el-rate
							position relative
							top -2px
							>>>.el-rate__icon
								font-size 14px
								margin-right 2px
					.date
						margin-top 6px
						font-size 12px
						color #aaa
			p
				padding 0 0 0 40px
				line-height 22px
				color #494949
			.btn-info
				height 22px
				margin 10px 0 0 40px
				.ic-btn
					display inline-block
					margin-right 20px
					font-size 14px
					cursor pointer
					.text
						color #ccc
						margin-left 3px
		.go-comment-list
			text-align center
			padding-bottom 14px
			margin-top -15px
			line-height 18px
#discussions-root
	.list
		padding-bottom 25px
		margin-right -18px
		li
			position relative
			padding 15px 18px 15px 0
			word-wrap break-word
			overflow hidden
			a
				display block
				overflow hidden
				text-decoration none
				h3
					font-size 17px
					font-weight 500
					margin 0
					line-height 1.41
					color #494949
				.info
					font-size 14px
					line-height 1
					color #25a4bb
					margin-top 5px
		.go-list
			text-align center
			padding-bottom 14px
			margin-top -15px
			line-height 18px
</style>
