<template>
  <div>
    <Back></Back>
    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        饮食1：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="food1" placeholder="请输入食物1"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        饮食2：
      </el-col>
      <el-col :span="10" >
        <el-input v-model="food2" placeholder="请输入食物2"></el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        建议：
      </el-col>
      <el-col :span="10">
        <el-select v-model="advice" placeholder="请选择" style="width: 100%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="2" :offset="6">
        描述：
      </el-col>
      <el-col :span="10">
        <el-input
          type="textarea"
          :rows="12"
          placeholder="请输入搭配描述"
          v-model="reason">
        </el-input>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px">
      <el-col :span="6" :offset="9">
        <el-button type="primary" style="width: 100%" @click="addFood">添加饮食搭配</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Back from "../../components/Back"
import axios from 'axios'
import {config} from "../../../utils/global"
export default {
  name: "AddFood",
  components: {Back},
  data() {
    return {
      food1: '',
      food2: '',
      level: '',
      options: [{
        value: '不建议',
        label: '不建议'
      }, {
        value: '推荐搭配',
        label: '推荐搭配'
      }],
      advice: '',
      reason: ''
    }
  },
  methods: {
    addFood() {
      const url = config.base_url + '/food/add'
      axios
        .post(url,{
          food1: this.food1,
          food2: this.food2,
          advice: this.advice,
          reason: this.reason
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
