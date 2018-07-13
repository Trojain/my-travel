<!-- 猜你喜欢详情页 -->
<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" v-if="bannerImg"></detail-banner>
		<detail-header></detail-header>
		<detail-list :details="details"></detail-list>
		<loading v-if="isloading"></loading>
	</div>
</template>

<script>
import DetailHeader from "./components/Header";
import DetailBanner from "./components/Banner";
import DetailList from "./components/List";
import Loading from "common/loading/Loading";
import axios from "axios";

export default {
    name: "Detail",
    components: {
        DetailHeader,
        DetailBanner,
        DetailList,
        Loading
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            details: {},
            isloading: false
        };
    },
    methods: {
        getDetailInfo() {
            const _this = this;
            // 采用jquery的jsonp跨域
            const url = `https://touch.dujia.qunar.com/item?id=${
                _this.$route.params.id
            }&it=n_index_oversea_ser_visa_desti_theme_tejia_tejia_desti_theme_tejia_tejia_micro_travel_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia_tejia`;
            $.ajax({
                url: url,
                type: "GET",
                dataType: "JSONP",
                beforeSend: function() {
                    _this.isloading = true;
                },
                success: function(res) {
                    if (res.ret) {
                        _this.details = res.data;
                        var imgList = [];
                        res.data.product.imageInfos.forEach((item, index) => {
                            imgList.push(item.bigUrl);
                        });
                        _this.gallaryImgs = imgList;
                        _this.bannerImg = imgList[0];
                        _this.sightName = res.data.summaryInfo.visitCity;
                    }
                },
                complete: function() {
                    _this.isloading = false;
                }
            });
        }
    },
    activated() {
        this.getDetailInfo();
    }
};
</script>

<style lang="stylus" scoped>
</style>

