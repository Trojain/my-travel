<!-- 猜你喜欢详情页 -->
<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" v-if="bannerImg"></detail-banner>
		<header-bar title="景点详情" :rightShow="false"></header-bar>
		<detail-list :details="details"></detail-list>
		<loading v-if="isloading"></loading>
		<back-to-top></back-to-top>
	</div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailList from "./components/List";
import Loading from "common/loading/Loading";
import HeaderBar from "common/headerBar/HeaderBar";
import BackToTop from "common/backToTop/BackToTop";
import axios from "axios";
import { getGuessDetail } from "api/home";

export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailList,
        Loading,
        HeaderBar,
        BackToTop
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            details: {},
            isloading: false,
        };
    },
    activated() {
        getGuessDetail(this.$route.params.id).then(res => {
            if (res.ret) {
                this.details = res.data;
                var imgList = [];
                res.data.product.imageInfos.forEach((item, index) => {
                    imgList.push({
                        src: item.bigUrl,
                        msrc: item.url,
                        w: 1260,
                        h: 840
                    });
                });
                this.gallaryImgs = imgList;
                this.bannerImg = imgList[0];
                this.sightName = res.data.summaryInfo.visitCity;
            }
        });
    }
};
</script>

