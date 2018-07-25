<!-- 城市选择右侧字母选择插件 -->
<template>
	<ul class="list">
		<li class="item" v-for="item in letters" :key="item" :ref="item" @click="handleClick" @touchstart.prevent="handleTouch" @touchmove="handleMove" @touchend="handleEnd">{{item}}</li>
	</ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: ["cities"],
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        };
    },
    updated() {
        this.startY = this.$refs["A"][0].offsetTop; // 'A' 距离顶部的位置
    },
    computed: {
        letters() {
            const letters = [];
            for (let i in this.cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        handleClick(e) {
            //   console.log(e.target.innerText);
            this.$emit("change", e.target.innerText);
        },
        handleTouch() {
            this.touchStatus = true;
        },
        handleMove(e) {
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79;
                    const index = Math.floor((touchY - this.startY) / 20);
                    console.log(index);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change", this.letters[index]);
                    }
                }, 16);
            }
        },
        handleEnd() {
            this.touchStatus = false;
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.list
	display flex
	flex-direction column
	justify-content center
	text-align center
	position absolute
	// top 1.58rem
	top 0.8rem
	right 0
	bottom 0
	width 0.4rem
	.item
		line-height 0.36rem
		color $bgColor
</style>

