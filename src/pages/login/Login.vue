<!-- 登录组件 -->
<template>
	<div class="login">
		<header-bar title="景点详情" :rightShow="rightShow"></header-bar>
		<x-input title="手机号" ref="mobile" mask="999 9999 9999" v-model="mobile" :max="13" is-type="china-mobile" placeholder="请输入手机号" required></x-input>
		<x-input title="验证码" ref="code" v-model="code" :max="4" :is-type="isnumber" placeholder="请输入验证码" required></x-input>
		<div class="weui-cell tips">
			手机号：13000000000，验证码：1111
		</div>
		<button type="submit" class="submit" @click="submit">登录</button>
	</div>
</template>

<script type="text/ecmascript-6">
import HeaderBar from "common/headerBar/HeaderBar";
import { mapGetters, mapMutations } from "vuex";
import { setMobile } from "js/cache"; // 缓存
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
    components: { XInput, HeaderBar },
    methods: {
        ...mapMutations({
            loginMobile: "SET_MOBILE"
        }),
        handleMobile(val) {
            this.loginMobile(val);
        },
        submit() {
            if (!this.$refs.mobile.valid) {
                this.$vux.toast.text("请输入正确的手机号");
                return;
            }
            if (!this.$refs.code.valid) {
                this.$vux.toast.text("请输入正确的验证码");
                return;
            }
            if (this.$refs.mobile.valid && this.$refs.code.valid) {
                if (this.mobile == "130 0000 0000" && this.code == "1111") {
                    this.handleMobile(this.mobile);
                    setMobile(this.mobile);
                    this.$vux.toast.show({
                        text: "登录成功"
                    });
                    setTimeout(() => {
                        // this.$router.push({ path: "/" });
                        this.$router.go(-1);
                    }, 1000);
                } else {
                    this.$vux.toast.text("手机或验证码不正确");
                }
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.login
	margin 0 0.4rem
	font-size 0.3rem
	line-height 0.6rem
	padding-top 2rem
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
	.tips
		font-size 0.2rem
		color #ddd
</style>
