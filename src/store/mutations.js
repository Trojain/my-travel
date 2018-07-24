const mutations = {

    // 设置城市
	'SET_CITY' (state, val) {
		state.city = val;
	},

	// 设置手机号
	'SET_MOBILE' (state, val) {
		state.mobile = val;
	},


}
export default mutations;





// export default {
//   changeCity(state, city) {
//     state.city = city;

//     //将city存储在localStorage中
//     //try catch 防止报错
//     try {
//       localStorage.city = city;
//     } catch (e) {}

//   }
// }
