<template>
  <div>
    <Back></Back>
    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        标题：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        内容：
      </el-col>
      <el-col :span="10">
        <el-input
          type="textarea"
          :rows="12"
          placeholder="请输入内容"
          v-model="content">
        </el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        分级：
      </el-col>
      <el-col :span="10">
        <el-input v-model="level" placeholder="请输入0-9分级"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="6" :offset="9">
        <el-button type="primary" style="width: 100%" @click="addArticle">添加文章</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Back from '../../components/Back'
import axios from 'axios'
import {config} from "../../../utils/global"

export default {
  name: "AddArticle",
  components: {Back},
  data() {
    return {
      title: '',
      content: '',
      level: ''
    }
  },
  methods: {
    addArticle() {
      const url = config.base_url + '/article/add'
      axios
        .post(url,{
          title: this.title,
          content: this.content,
          level: this.level
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
