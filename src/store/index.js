import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
//每次修改state都会在控制台打印log
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict: debug, // 当debug=true时开启严格模式(性能有损耗)
	plugins: debug ? [createLogger()] : []
})






// import Vue from "vue"
// import Vuex from "vuex"
// import state from "./state"
// import mutations from "./mutations"

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state,
//   mutations
// })


/* 完整如下：

//获取localStorage中存储的city
//try catch 防止报错
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({

  // 1.存放全局公用的数据
  state: {
    city: defaultCity
  },

  // 2.接收并监听dispatch传递过来的方法和参数
  //   actions: {
  //     changeCity(ctx, city) {
  //       console.log(ctx, city);
  //       //actions执行的时候用commit方法调用mutations
  //       ctx.commit('changeCity', city)
  //     }
  //   },

  // 3.mutations被commit调用
  mutations: {
    changeCity(state, city) {
      state.city = city;

      //将city存储在localStorage中
      //try catch 防止报错
      try {
        localStorage.city = city;
      } catch (e) {}

    }
  }

}) */
