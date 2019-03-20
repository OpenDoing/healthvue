<template>
   <div>
     <x-header :left-options="{showBack: false}">文章列表</x-header>
     <flexbox orient="vertical">
       <flexbox-item v-for="article in articles" :key="article.id" style="border-bottom: 10px solid #F5F5F5;">
         <router-link :to="{name: 'ArticleDetail', params: {id: article.id}}" style="color: black">
           <flexbox orient="vertical">
             <flexbox-item ><h2 style="margin-left: 15px"><b>{{article.title}}</b></h2></flexbox-item>
             <flexbox-item><p style="margin-left: 15px">{{article.content.substring(0,40) + '...'}}</p></flexbox-item>
           </flexbox>
         </router-link>
       </flexbox-item>
     </flexbox>
     <divider></divider>
     <divider></divider>
     <Home></Home>
   </div>
</template>

<script>
import Home from "./Home"
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'
import { config } from "../utils/global"
import axios from 'axios'
export default {
  name: "Article",
  components: {
    XHeader,
    Home,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,
  },
  data() {
    return{
      articles: []
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      const url = config.base_url + '/user/get?userId=' + window.localStorage.getItem('userId')
      axios
        .get(url)
        .then(response=>{
          if (response.data.data.level >=0) {
            this.part(response.data.data.level)
          } else {
            this.all()
          }
        })

    },
    part(level) {
      const url = config.base_url + '/article/getBylevel?level=' + level
      axios
        .get(url)
        .then(response=>{
          this.articles = response.data.data
          console.log(this.articles)
          if (this.articles.length === 0) {
            this.$vux.toast.text('暂无您的相关推荐！', 'bottom')
          }
        })
    },
    all() {
      const url = config.base_url + '/article/all'
      axios
        .get(url)
        .then(response=>{
          this.articles = response.data.data
        })
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
