<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <el-menu
          :router="true"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!--<el-menu-item index="/">主页</el-menu-item>-->
          <el-menu-item index="/back/food">饮食搭配</el-menu-item>
          <el-menu-item index="/back/user">用户管理</el-menu-item>
          <el-menu-item index="/back/video" >视频管理</el-menu-item>
          <el-menu-item index="/back/article">文章管理</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "Back",
    data() {
      return {
        activeIndex: '/back/user'
      }
    },
    methods: {
      handleSelect(val) {
        this.activeIndex = val
      }
    }
  }
</script>

<style scoped>
  .el-row{
    background-color: #545c64;
    /*height: 65px;*/
    box-shadow: 0 2px 8px rgba(30,20,20,.1);
  }
</style>
