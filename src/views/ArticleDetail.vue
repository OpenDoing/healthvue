<template>
   <div>
     <x-header :title="article.title"></x-header>
     <flexbox orient="vertical">
       <flexbox-item>
         <h2>{{article.title}}</h2>
       </flexbox-item>
       <flexbox-item>
         <p style="font-size: 14px">创建时间：{{article.ctime}}</p>
       </flexbox-item>
     </flexbox>
     <flexbox style="border-top: 10px solid #F5F5F5;padding-left: 15px;padding-right: 15px">
       <flexbox-item>
         {{article.content}}
       </flexbox-item>
     </flexbox>
   </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'

export default {
  name: "ArticleDetail",
  components: {
    XHeader,
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
      article: {
        id: 1,
        title: '嘉庆压力',
        content: '打碎佛钮司UN鬼王内容吧呢都',
        category: '',
        ctime: '2019-03-10'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {

    }
  }
}
</script>

<style scoped>

</style>
