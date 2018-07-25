<!-- 首页 -->
<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-guess :list="guessList"></home-guess>
		<my-footer></my-footer>
		<home-recommend :list="recommendList"></home-recommend>
		<loading v-if="!isloading"></loading>
		<back-to-top></back-to-top>
	</div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeGuess from "./components/Guess";
import MyFooter from "common/footer/MyFooter";
import Loading from "common/loading/Loading";
import BackToTop from "common/backToTop/BackToTop";
import axios from "axios";
import { mapState } from "vuex";
import { geiIndexBanner, getRecommend, getGuessList } from "api/home";
export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeGuess,
        Loading,
		BackToTop,
		MyFooter
    },
    data() {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            guessList: [],
            lastCity: ""
        };
    },
    computed: {
        ...mapState(["city"]),
        isloading() {
            if (this.swiperList) {
                return true;
            }
        }
    },
    methods: {
        getHomeInfo() {
            axios
                .get(
                    "http://other.xiabingbing.cn/index.json?aaa&city=" +
                        this.city
                )
                .then(this.getHomeInfoSucc);
            // axios.get('/api/index.json').then(this.getHomeInfoSucc)
            // 等同于
            // axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            const rs = res.data;
            if (rs.status && rs.data) {
                this.iconList = rs.data.iconList;
            }
        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    //<keep-alive>下存在的钩子函数
    activated() {
        if (this.lastCity !== this.city) {
            this.lastCity = this.city;
            this.getHomeInfo();
        }

        // 获取首页轮播图
        geiIndexBanner().then(res => {
            if (res.ret) {
                this.swiperList = res.data;
            } else {
                this.swiperList = [];
            }
        });
        // 获取首页热销推荐
        getRecommend().then(res => {
            if (res.totalCount > 0) {
                this.recommendList = res.lineList;
            } else {
                this.recommendList = [];
            }
        });
        //猜你喜欢
        getGuessList().then(res => {
            if (res.ret) {
                this.guessList = res.data;
            } else {
                this.guessList = [];
            }
        });
    }
};
</script>
<style>
</style>
