<!-- 城市选择列表组件 -->
<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<ul class="button-list">
					<li class="button-wrapper">
						<div class="button">{{this.city}}</div>
					</li>
				</ul>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<ul class="button-list">
					<li class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCity(item.name)">
						<div class="button">{{item.name}}</div>
					</li>
				</ul>
			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list">
					<li class="item border-bottom" v-for="i in item" :key="i.id" @click="handleCity(i.name)">{{i.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { setCity } from "js/cache"; // 缓存
import Bscroll from "better-scroll";
export default {
    name: "CityList",
    props: ["cities", "hot", "letter"],
    methods: {
        ...mapMutations({
            changeCity: "SET_CITY" // 将changeCity与mutations中的SET_CITY关联
        }),
        handleCity(city) {
            // 提交一个名为changeCity的mutation，并传入参数
            this.changeCity(city); // 相当于this.$store.commit("changeCity", city);
            setCity(city); // 并将当前城市存入缓存

            //跳转到首页
            this.$router.push("/");

            //用dispatch将方法changeCity和参数city传递给actions
            //this.$store.dispatch("changeCity", city);

            //也可以通过commit直接调用mutations，跳过actions
            //this.$store.commit("changeCity", city);
        }
    },
    computed: {
        // 用vuex读取数据(读取的是getters.js中的数据)
        // 相当于this.$store.getters.city(vuex语法糖)
        ...mapGetters(["city"]) // 直接使用this.city即可调用
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    watch: {
        //监听letter
        letter() {
            console.log(this.letter);
            if (this.letter) {
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.border-topbottom
	&:before
		border-color #ccc
	&:after
		border-color #ccc
.border-bottom
	&:before
		border-color #ccc
.list
	overflow hidden
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	margin-bottom 49px
	.button-list
		padding 0.1rem 0.6rem 0.1rem 0.1rem
		clearfix()
		.button-wrapper
			width 33.33%
			float left
			.button
				text-align center
				margin 0.1rem
				padding 0.15rem 0
				border 0.02rem solid #ccc
				border-radius 0.06rem
	.title
		line-height 0.76rem
		background #eee
		padding-left 0.2rem
		color #666
		font-size 0.26rem
	.item-list
		.item
			line-height 0.76rem
			padding-left 0.2rem
</style>
