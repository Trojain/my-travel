<!-- 登录组件 -->
<template>
	<div class="login">
		<x-input title="手机号" ref="mobile" mask="999 9999 9999" v-model="mobile" :max="13" is-type="china-mobile" placeholder="请输入手机号" required></x-input>
		<x-input title="验证码" ref="code" v-model="code" :max="4" :is-type="isnumber" placeholder="请输入验证码" required></x-input>
		<div class="weui-cell"></div>
		<button type="submit" class="submit" @click="submit">登录</button>
	</div>
</template>

<script type="text/ecmascript-6">
import { XInput } from "vux";
export default {
    name: "login",
    data() {
        return {
            mobile: "",
            code: "",
            isnumber: function(value) {
                return {
                    valid: /^\d{4}$/.test(value),
                    msg: "验证码必须为4位数字"
                };
            }
        };
    },
    components: { XInput },
    methods: {
        submit() {
			this.$vux.toast.text('hello')
			if(this.$refs.mobile.valid){
			}
            if (this.$refs.mobile.valid && this.$refs.code.valid) {
                alert(1);
            }
        }
	},
};
</script>

<style scoped lang="stylus">
.login
	margin 1rem 0.4rem
	font-size 0.3rem
	line-height 0.6rem
	>>>.weui-input
		position relative
		top -2px
	.submit
		width 163px
		background-color #fe8233
		color #fff
		border none
		border-radius 36px
		margin 45px auto
		padding 8px 12px
		font-size 15px
		display block
</style>
