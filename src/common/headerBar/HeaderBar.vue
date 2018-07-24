<!-- 头部会隐藏显示 -->
<template>
	<div>
		<div class="header-abs" v-show="showAbs" @click="goBack">
			<i class="iconfont back-icon">&#xe624;</i>
		</div>
		<div class="header-fixed" v-show="!showAbs" :style="opactiyStyle">
			<i class="iconfont back-icon" @click="goBack">&#xe624;</i>{{title}}
			<span class="header-right iconfont" v-if="rightShow" @click="clickMore" v-html="rightShow"></span>
		</div>
	</div>
</template>

<script>
export default {
    name: "DetailHeader",
    props: {
        title: {
            type: String,
            default: ""
        },
        rightShow: {
            default: ""
        }
    },
    data() {
        return {
            showAbs: true,
            opactiyStyle: {
                opacity: 0
            }
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        handleScroll() {
            const scroll_top =
                document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(scroll_top);
            if (scroll_top > 60) {
                let opacity = scroll_top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opactiyStyle = {
                    opacity: opacity
                };
                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
        },
        clickMore() {
            this.$emit("more");
        }
    },
    // keepalive下的生命周期函数
    // 在每次页面展示时会执行
    activated() {
        // 全局事件,能影响其他组件，要解绑
        window.addEventListener("scroll", this.handleScroll);
    },
    // 在页面即将被替换时会执行
    deactivated() {
        // 对全局事件解绑
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header-abs
	z-index 4
	position absolute
	left 0.2rem
	top 0.2rem
	width 0.7rem
	height 0.7rem
	line-height 0.7rem
	border-radius 50%
	text-align center
	background rgba(0, 0, 0, 0.8)
	.back-icon
		color #fff
		font-size 0.3rem
		margin-right 0.06rem
.header-fixed
	z-index 4
	position fixed
	top 0
	left 0
	width 100%
	height 0.86rem
	line-height 0.86rem
	text-align center
	color #fff
	background $bgColor
	font-size 0.32rem
	.back-icon
		position absolute
		left 0
		top 0
		text-align center
		font-size 0.4rem
		color #fff
		width 0.8rem
	.header-right
		color #fff
		font-size 0.44rem
		position absolute
		right 0
		width 0.8rem
</style>

