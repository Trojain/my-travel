// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper' //vue-awesome-swiper轮播插件
import 'babel-polyfill' //解决浏览器不支持promise导致白屏问题
import store from './store' //vuex存储文件

import $ from 'jquery'

// 下面的styles指的是 src/assets/styles 目录 (在build/webpack.base.config.js中配置)
import 'styles/index.styl'
import 'swiper/dist/css/swiper.css' //轮播插件

Vue.config.productionTip = false

//将fastclick绑定在页面的body上
fastclick.attach(document.body)

//全局使用轮播插件
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
// 懒加载默认图片
Vue.use(VueLazyload, {
	preLoad: 1.3, // 预载高度比例
	error: require('./assets/images/logo.png'),
	loading: require('./assets/images/loading_green.gif')
});

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
