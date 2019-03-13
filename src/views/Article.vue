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
     <Home></Home>
   </div>
</template>

<script>
import Home from "./Home"
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'

export default {
  name: "Article",
  components: {XHeader, Home,Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,
  },
  data() {
    return{
      articles: [
        {
          id: 1,
          title: '嘉庆压力',
          content: '打碎佛钮司UN鬼王内容吧呢都',
          category: '',
          ctime: '2019-03-10'
        },
        {
          id: 2,
          title: '压力',
          content: 'dd',
          category: '',
          ctime: '2019-03-10'
        },
        {
          id: 3,
          title: '抑郁',
          content: '理减压是一种高效整合的心理咨询方式，心理减压技术源于心理咨询却高于心理咨询。心理减压的目的就是达成求诉者身心的平衡以及生活﹑工作﹑家庭的和谐。即心理咨询不帮助求助者解决任何生活中的具体问题，而心理减压却要求帮助求助者解决',
          category: '',
          ctime: '2019-03-10'
        },
        {
          id: 4,
          title: '宿舍',
          content: '打碎佛钮司UN鬼王内容吧呢都',
          category: '',
          ctime: '2019-03-10'
        }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
