import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Food from '@/views/Food'
import Info from '@/views/Info'
import Video from '@/views/Video'
import Article from '@/views/Article'
import Question from '@/views/Question'
import ArticleDetail from '@/views/ArticleDetail'
import Login from '@/views/Login'
import Register from '@/views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/ques',
      name: 'Question',
      component: Question
    }
  ]
})
