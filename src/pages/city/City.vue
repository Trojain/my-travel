<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handChange"></city-alphabet>
	</div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
    name: "Search",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ""
        };
    },
    methods: {
        handChange(rs) {
            this.letter = rs;
        },
        getCityInfo() {
            axios
                .get("http://other.xiabingbing.cn/city.json")
                .then(this.getCityInfoSucc);
        },
        getCityInfoSucc(res) {
            console.log(res);
            const rs = res.data;
            if (rs.status) {
                this.cities = rs.data.cities;
                this.hotCities = rs.data.hotCities;
            }
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>
<style lang="stylus" scoped>
</style>
