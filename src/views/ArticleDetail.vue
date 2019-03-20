<template>
   <div>
     <x-header :title="article.title"></x-header>
     <flexbox orient="vertical" >
       <flexbox-item style="margin-top: 15px">
         <h2>{{article.title}}</h2>
       </flexbox-item>
       <flexbox-item>
         <p style="font-size: 14px">创建时间：{{article.ctime}}</p>
       </flexbox-item>
     </flexbox>
     <flexbox style="border-top: 10px solid #F5F5F5;">
       <flexbox-item>
         <p style="padding-left: 15px;padding-right: 15px">{{article.content}}</p>
       </flexbox-item>
     </flexbox>
   </div>
</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox} from 'vux'
import { config } from "../utils/global"
import axios from 'axios'
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
      article: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const url =config.base_url + '/article/get?id=' + this.$route.params.id
      axios
        .get(url)
        .then(response=>{
          this.article = response.data.data
        })
    }
  }
}
</script>

<style scoped>

</style>
