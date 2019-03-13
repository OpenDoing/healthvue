<template>
  <div>
    <!--<Video></Video>-->
    <tabbar class="tab">
      <tabbar-item link="/video">
        <img slot="icon"  src="../assets/img/video.svg">
        <span slot="label">视频</span>
      </tabbar-item>
      <tabbar-item link="/food">
        <img slot="icon" src="../assets/img/food.svg">
        <span slot="label">饮食</span>
      </tabbar-item>
      <tabbar-item link="/article">
        <img slot="icon" src="../assets/img/article.svg">
        <span slot="label">减压</span>
      </tabbar-item>
      <tabbar-item link="/info">
        <img slot="icon" src="../assets/img/mine.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: "Home",
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
  }
}
</script>

<style scoped>
  .tab{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
