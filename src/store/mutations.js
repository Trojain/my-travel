const mutations = {

	'SET_CITY' (state, val) {
		state.city = val;
	},

	// 设置vkey
	// 'SET_VKEY' (state, val) {
	// 	state.vkey = val;
	// },


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
