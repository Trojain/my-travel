<!-- 返回顶部 -->
<template>
	<div class="backtotop" :style="opactiyStyle" v-show="!showAbs" @click="backtotops" style="z-index:99">
		<span class="iconfont">&#xe786;</span>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    data() {
        return {
            showAbs: true,
            opactiyStyle: {
                opacity: 0
            }
        };
    },
    methods: {
        handleScroll() {
            let scroll_top =
                document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scroll_top);
            if (scroll_top > 500) {
                let opacity = scroll_top / 800;
                opacity = opacity > 1 ? 1 : opacity;
                this.opactiyStyle = {
                    opacity: opacity
                };
                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
        },
        backtotops() {
            var scrollToptimer = setInterval(function() {
                console.log("定时循环回到顶部");
                var top =
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;
                var speed = top / 5;
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= speed;
                } else {
                    document.documentElement.scrollTop -= speed;
                }
                if (top == 0) {
                    clearInterval(scrollToptimer);
                }
            }, 30);
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

<style scoped lang="stylus">
.backtotop
	position fixed
	bottom 10%
	right 0.4rem
	width 0.8rem
	height 0.8rem
	line-height 0.8rem
	text-align center
	background-color rgba(0, 0, 0, 0.7)
	border-radius 50%
	.iconfont
		font-size 0.4rem
		color #00bcd4
</style>
