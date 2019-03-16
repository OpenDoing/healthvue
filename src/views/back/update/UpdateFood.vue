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
        <el-button type="primary" style="width: 100%" @click="updateFood">提交修改</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Back from "../../components/Back"
import axios from 'axios'
import {config} from "../../../utils/global"
export default {
  name: "UpdateFood",
  components: {Back},
  data() {
    return{
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
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const url = config.base_url + '/food/get?id=' + this.$route.params.id
      axios
        .get(url)
        .then(response=>{
          this.food1 = response.data.data.food1
          this.food2 = response.data.data.food2
          this.advice = response.data.data.advice
          this.reason = response.data.data.reason
        })
    },
    updateFood() {
      const url = config.base_url + '/food/update?food1=' + this.food1 +
        '&food2=' + this.food2 + '&advice=' +this.advice + '&reason=' + this.reason + '&id=' + this.$route.params.id
      axios
        .post(url)
        .then(response=>{
          this.$message.success('修改成功');
        })
    }
  }
}
</script>

<style scoped>

</style>
