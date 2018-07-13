<!-- 城市选择搜索组件 -->
<template>
	<div>
		<div class="search">
			<input type="text" class="search-input" placeholder="请输入城市名或拼音" v-model="keyworld">
		</div>
		<div class="search-content" ref="search" v-show="keyworld">
			<ul>
				<li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="nodata">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
import { setCity } from "js/cache";  // 缓存
export default {
    name: "CitySearch",
    props: ["cities"],
    data() {
        return {
            keyworld: "",
            list: [],
            timer: null
        };
    },
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
            // this.$store.commit("changeCity", city);
        }
    },
    computed: {
        nodata() {
            return !this.list.length;
        }
    },
    watch: {
        keyworld() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (!this.keyworld) {
                this.list = [];
                return;
            }
            this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (
                            value.spell.indexOf(this.keyworld) > -1 ||
                            value.name.indexOf(this.keyworld) > -1
                        ) {
                            result.push(value);
                        }
                    });
                }
                this.list = result;
            }, 100);
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search);
    }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.search
	height 0.72rem
	padding 0 0.1rem
	background $bgColor
	.search-input
		width 100%
		height 0.62rem
		line-height 0.62rem
		text-align center
		border-radius 0.06rem
		color #666666
		box-sizing border-box
		padding 0 0.1rem
.search-content
	z-index 1
	overflow hidden
	position absolute
	top 1.58rem
	left 0
	right 0
	bottom 0
	background #eee
	.search-item
		line-height 0.62rem
		padding-left 0.2rem
		background #fff
		color #666
</style>
