<template>
  <div>
    <x-header :left-options="{showBack: false}">视频首页</x-header>
    <flexbox orient="vertical">
      <flexbox-item v-for="video in videos" :key="video.id" style="border-bottom: 10px solid #F5F5F5;">
        <flexbox orient="vertical">
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
            <video :src="video.path" controls="controls" class="video">

            </video>
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
      videos: [
        {
          id: 1,
          path: 'http://v1.keepcdn.com/video/2017/11/26/16/3f9f40f94ebeedd6e7a164f85908584b039d3768.mp4',
          title: '秀一波操作',
          category: '其他'
        },
        {
          id: 2,
          path: 'http://192.168.1.114:8007/video/2.mp4',
          title: '波比运动',
          category: 'Burpee'
        },
        {
          id: 3,
          path: 'http://192.168.1.114:8007/video/3.mp4',
          title: '波比运动',
          category: 'Burpee'
        },
        {
          id: 4,
          path: 'http://192.168.1.114:8007/video/1.mp4',
          title: '波比运动',
          category: 'Burpee'
        },
        {
          id: 5,
          path: 'http://v1.keepcdn.com/video/2017/07/24/23/9b4a3c2f1fe318f020eb1f94073ac99a8ef34aad.mp4',
          title: '减腰部赘肉',
          category: '其他'
        },
      ]
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
