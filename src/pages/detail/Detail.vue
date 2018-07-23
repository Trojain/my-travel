<!-- 猜你喜欢详情页 -->
<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" v-if="bannerImg"></detail-banner>
		<header-bar title="景点详情" :rightShow="false"></header-bar>
		<detail-list :details="details"></detail-list>
		<loading v-if="isloading"></loading>
		<toast v-model="toastShow" type="cancel" :time="3000">{{toastMsg}}</toast>
	</div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailList from "./components/List";
import Loading from "common/loading/Loading";
import HeaderBar from "common/headerBar/HeaderBar";
import axios from "axios";
import { Toast } from 'vux'

export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailList,
        Loading,
		HeaderBar,
		Toast
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            details: {},
			isloading: false,
			toastShow:false,
			toastMsg:''
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
				jsonp:'callback',
				jsonpCallback:"successCallback",
                beforeSend: function() {
					_this.isloading = true;
                },
                success: function(res) {
                    if (res.ret) {
                        _this.details = res.data;
                        var imgList = [];
                        res.data.product.imageInfos.forEach((item, index) => {
                            imgList.push({
                                src: item.bigUrl,
                                msrc: item.url,
                                w: 1260,
                                h: 840
                            });
                        });
                        _this.gallaryImgs = imgList;
                        _this.bannerImg = imgList[0];
						_this.sightName = res.data.summaryInfo.visitCity;
                    }
				},
				error:function (res) {
					_this.toastShow = true;
					_this.toastMsg = '网络错误...'
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

