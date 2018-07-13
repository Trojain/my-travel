<!-- 详情页 列表 -->
<template>
    <div>
        <ul>
            <li class="item" v-for="(item,index) in list" :key="index">
                <div class="item-title border-bottom">
                    <span class="item-title-icon"></span>
                    {{item.title}}
                </div>
                <!-- 递归组件 -->
                <!-- <div v-if="item.children" class="item-children">
                    <detail-list :list="item.children"></detail-list>
                </div> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: ['list']
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.item-title
    line-height 0.8rem
    font-size 0.32rem
    padding 0 0.2rem
    .item-title-icon
        position relative
        left 0.06rem
        top 0.07rem
        display inline-block
        width 0.36rem
        height 0.36rem
        background url('../../../assets/images/detail.png') 0 -0.45rem no-repeat
        margin-right 0.1rem
        background-size 0.4rem 3rem
.item-children
    padding 0 .4rem
</style>

