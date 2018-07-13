<!-- 淡入淡出组件 -->
<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
  name: "FadeAnimation"
};
</script>

<style lang="stylus" scoped>
/*
1.v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

2.v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

3.v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。

4.v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

5.v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。

6.v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。
*/
.v-enter, .v-leave-to
    opacity 0
.v-enter-active, .v-leave-active
    transition opacity 0.5s
</style>
