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
import Password from '@/views/Password'


import FoodAdvice from '@/views/back/user/FoodAdvice'
import Manage from '@/views/back/topic/Manage'
import Prohibit from '@/views/back/user/Prohibit'
import LoginBack from '@/views/back/LoginBack'
import ArticleManagement from '@/views/back/user/ArticleManagement'

import AddArticle from '@/views/back/add/AddArticle'
import AddFood from '@/views/back/add/AddFood'
import AddVideo from '@/views/back/add/AddVideo'

import UpdateArticle from '@/views/back/update/UpdateArticle'
import UpdateFood from '@/views/back/update/UpdateFood'
import UpdateVideo from '@/views/back/update/UpdateVideo'

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
      path: '/info/password/:id',
      name: 'Password',
      component: Password
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
    },
    {
      path: '/back/food',
      name: 'FoodAdvice',
      component: FoodAdvice
    },
    {
      path: '/back/video',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/back/user',
      name: 'Prohibit',
      component: Prohibit
    },
    {
      path: '/back/article',
      name: 'ArticleManagement',
      component: ArticleManagement
    },
    {
      path: '/back/login',
      name: 'LoginBack',
      component: LoginBack
    },
    {
      path: '/back/food/add',
      name: 'AddFood',
      component: AddFood
    },
    {
      path: '/back/video/add',
      name: 'AddVideo',
      component: AddVideo
    },
    {
      path: '/back/article/add',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: '/back/food/update/:id',
      name: 'UpdateFood',
      component: UpdateFood
    },
    {
      path: '/back/video/update/:id',
      name: 'UpdateVideo',
      component: UpdateVideo
    },
    {
      path: '/back/article/update/:id',
      name: 'UpdateArticle',
      component: UpdateArticle
    },
  ]
})
