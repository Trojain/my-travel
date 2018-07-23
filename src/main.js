// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'babel-polyfill' //解决浏览器不支持promise导致白屏问题
import store from './store' //vuex存储文件

// 下面的styles指的是 src/assets/styles 目录 (在build/webpack.base.config.js中配置)
import 'styles/index.styl'
// import 'js/vconsole.js'
Vue.config.productionTip = false

//将fastclick绑定在页面的body上
fastclick.attach(document.body)

// 懒加载默认图片
Vue.use(VueLazyload, {
	preLoad: 1.3, // 预载高度比例
	error: require('./assets/images/logo.png'),
	loading: require('./assets/images/loading_green.gif'),
	attempt: 1
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
