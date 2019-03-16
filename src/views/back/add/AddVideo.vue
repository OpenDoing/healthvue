<template>
  <div>
    <Back></Back>
    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        标题：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        分类：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="category" placeholder="请输入类别"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 40px">
      <el-col :span="18" :offset="6">
        如果是网络资源，直接粘贴地址即可；如果是本地资源，请先将视频转存到<b>video</b>目录，然后将文件名复制到如下输入栏。
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="2" :offset="6">
        地址：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="address" placeholder="请输入URL地址或本地文件名"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="6" :offset="9">
        <el-button type="primary" style="width: 100%" @click="addVideo">添加视频</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Back from "../../components/Back"
import axios from 'axios'
import {config} from "../../../utils/global"
export default {
  name: "AddVideo",
  components: {Back},
  data() {
    return{
      title: '',
      category: '',
      address: '',
    }
  },
  mounted() {

  },
  methods:{
    addVideo() {
      const url = config.base_url + '/video/add'
      axios
        .post(url,{
          title: this.title,
          category: this.category,
          path: this.address,
        })
        .then(response=>{
          this.$message.success('添加成功');
        })
    }
  }
}
</script>

<style scoped>

</style>
