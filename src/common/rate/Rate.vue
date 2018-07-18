<!-- 评分组件 -->
<!-- 需要配合iconfont使用 -->
<template>
	<div class="rate">
		<span v-for="(item,index) in itemClasses" :class="item" class="star-item iconfont" :track-by="index" :key="index" @click="stars(index)" :style="fontSize"></span>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "Rate",
    props: {
        score: {
            type: Number,
            default: 0
        },
        fontSize: {
            type: String,
            default: "font-size:16px"
        }
    },
    methods: {
        stars(ied) {
            this.score = ied + 1;
        }
    },
    computed: {
        itemClasses() {
            this.score > 5 ? (this.score = 5) : this.score;
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            let integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
                result.push("icon-star-full");
            }
            if (hasDecimal) {
                result.push("icon-star-half");
            }
            while (result.length < 5) {
                result.push("icon-star-empty");
            }
            return result;
        }
    }
};
</script>

<style scoped lang="stylus">
.rate
	display inline-block
	.star-item
		margin-right 2px
		color orange
</style>
