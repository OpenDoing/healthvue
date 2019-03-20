<template>
  <div>
    <x-header :left-options="{showBack: false}" title="视频首页"><div slot="right" @click="videoLike()">{{tip}}</div></x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="video in videos" :key="video.id" style="border-bottom: 10px solid #F5F5F5;">
        <flexbox orient="vertical" >
          <flexbox-item>
            <flexbox>
              <flexbox-item style="font-size: 20px">
                <div style="margin-left: 15px">{{video.title}}</div>
              </flexbox-item>
              <flexbox-item :span="4">
                <badge :text="video.path.substring(0,8) === 'http://1' ? '本地视频': '网络视频'" style="margin-left: 10px"></badge>
              </flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox-item>
            <div @click="like(video.category)">
            <video :src="video.path" controls="controls" class="video" >

            </video>
            </div>
          </flexbox-item>
          <flexbox-item style="margin-top: 8px"></flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
    <Home></Home>
    <divider></divider>
    <divider></divider>
    <divider>--</divider>
  </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,Badge } from 'vux'
import Home from './Home'
import axios from 'axios'
import {config} from "../utils/global"
export default {
  name: "Video",
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,
    Home,
    Badge
  },
  data() {
    return {
      videos: [],
      tip: '推送'
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    play() {
      console.log(111)
    },
    videoLike() {
      if (this.tip === '推送') {
        this.tip = '全部'
        this.init()
      } else {
        this.tip = '推送'
        this.likeVideoes()
      }
    },
    likeVideoes() {
      let id = Number(window.localStorage.getItem('userId'))
      const url = config.base_url + '/video/category?userId=' + id
      axios
        .get(url)
        .then(response=>{
          for (let i = 0;i < response.data.data.length; i++) {
            let tpath = response.data.data[i].path
            if (tpath.substring(0,4) !== 'http') {
              response.data.data[i].path = config.source_url + response.data.data[i].path
            }
          }
          this.videos = response.data.data
          this.$vux.toast.text('已推送您喜欢的视频！', 'bottom')

        })
    },
    init() {
      const url = config.base_url + '/video/all'
      axios
        .get(url)
        .then(response=>{
          for (let i = 0;i < response.data.data.length; i++) {
            let tpath = response.data.data[i].path
            if (tpath.substring(0,4) !== 'http') {
              response.data.data[i].path = config.source_url + response.data.data[i].path
            }
          }
          this.videos = response.data.data
          console.log(this.videos)
        })
    },
    like(category) {
      console.log(898)
      let id = Number(window.localStorage.getItem('userId'))
      const url = config.base_url + '/video/like?userId=' + id + '&category=' + category
      axios
        .post(url)
        .then(response=>{
          console.log(category)
        })
    }
  }
}
</script>

<style scoped>
  .video{
    width: 100%;
    height: 200px;
  }
</style>
