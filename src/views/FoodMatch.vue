<template>
  <div>
    <x-header>添加饮食搭配</x-header>
    <group>
      <x-input title="饮食1" v-model="food1"></x-input>
      <x-input title="饮食2" v-model="food2"></x-input>
    </group>

    <flexbox>
      <flexbox-item>
        <group>
          <x-input title="搭配建议" v-model="advice" ></x-input>
          <x-textarea :rows="7" v-model="reason" placeholder="请输入搭配理由"></x-textarea>
        </group>
      </flexbox-item>
    </flexbox>

    <flexbox style="margin-top: 15px">
      <flexbox-item :span="4"></flexbox-item>
      <flexbox-item :span="4">
        <x-button type="default" @click.native="addfood">添加</x-button>
      </flexbox-item>

    </flexbox>
  </div>
</template>

<script>
  import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,Group,XInput,XTextarea} from 'vux'
  import {config} from "../utils/global"
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: "FoodMatch",
    components: {
      XTextarea,
      XHeader,
      Flexbox,
      FlexboxItem,
      Divider,
      XImg,
      Icon,
      XButton,
      ViewBox,
      Group,XInput,
    },
    data() {
      return{
        food1: '',
        food2: '',
        page: 1,
        reason:'',
        advice: ''
      }
    },
    mounted() {
      // this.init()
    },
    methods: {
      local() {
        const url = config.base_url +  '/food/local?food1=' + this.food1 + '&food2=' + this.food2
        axios
          .get(url)
          .then(response=>{
            if (response.data.data !== null) {
              this.advice = response.data.data.advice
              this.reason = response.data.data.reason
            } else{
              this.advice = '无'
              this.reason = '未搜索到相关结果'
            }
          })
      },
      addfood(){
        const url = config.base_url + '/food/add'
        axios
          .post(url,{
            food1: this.food1,
            food2: this.food2,
            advice: this.advice,
            reason: this.reason
          })
          .then(response=>{
            this.$vux.toast.text('添加成功', 'bottom')
          })
      },
      init() {
        this.$vux.loading.show({
          text: 'Loading'
        })
        const food = this.food1 + '+' + this.food2
        const url = config.base_url +  '/food/net?food=' + food + '&page=' + 1
        axios
          .get(url)
          .then(response=>{
            this.$vux.loading.hide()
            if (response.data.result.length !== 0) {
              this.reason = response.data.result[0].function
              if(response.data.result[0].isGood === 1){
                this.advice = '推荐搭配'
              } else {
                this.advice = '不建议'
              }
            }  else {
              this.reason = '未搜索到相关搭配，请在本地搭配中查询'
              this.advice = '无'

            }
          })
          .catch(err=>{
            this.$vux.loading.hide()
          })
        this.$vux.loading.hide()

      },

    }
  }
</script>

<style scoped>

</style>
