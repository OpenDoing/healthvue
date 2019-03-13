<template>
  <div>
    <x-header :left-options="{showBack: false}">饮食搭配</x-header>
    <group>
      <x-input title="饮食1" v-model="food1"></x-input>
      <x-input title="饮食2" v-model="food2"></x-input>
    </group>
    <flexbox style="margin-top: 15px">
      <flexbox-item :span="2"></flexbox-item>
      <flexbox-item :span="4">
        <x-button mini>本地查询</x-button>
      </flexbox-item>
      <flexbox-item :span="4">
        <x-button type="primary" mini @click.native="init">在线查询</x-button>
      </flexbox-item>
    </flexbox>

    <flexbox>
      <flexbox-item>
        <group>
          <x-input title="搭配建议" v-model="advice" disabled></x-input>
          <x-textarea :rows="7" v-model="reason" disabled></x-textarea>
        </group>
      </flexbox-item>
    </flexbox>
    <Home></Home>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,Group,XInput,XTextarea} from 'vux'
import Home from "./Home"
import {config} from "../utils/global"
import axios from 'axios'
import qs from 'qs'
export default {
  name: "Food",
  components: {
    XTextarea,
    Home,
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
      food1: '柿子',
      food2: '螃蟹',
      page: 1,
      reason:'中医学中，螃蟹与柿子都属寒性食物，故而不能同食。从现代医学的角度来看，含高蛋白的蟹、鱼、虾在鞣酸的作用下，很易凝固成块，即胃柿石。',
      advice: '不建议'
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
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
    },

  }
}
</script>

<style scoped>

</style>
