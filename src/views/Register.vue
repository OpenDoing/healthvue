<template>
  <div>
  <x-header class="" :left-options="{showBack: false}">注册</x-header>
  <flexbox>
    <flexbox-item>
      <img src="../assets/img/home.jpg" class="home-cover"/>
    </flexbox-item>
  </flexbox>

  <flexbox orient="vertical">
    <flexbox-item>
      <group>
        <x-input title="用户名" v-model="username"  required>
        </x-input>
      </group>
      <group>
        <x-input title="密码" v-model="password1" required type="password">
        </x-input>
      </group>
      <group>
        <x-input title="确认密码" v-model="password2" required type="password">
        </x-input>
      </group>
    </flexbox-item>
  </flexbox>

  <flexbox class="mt40">
    <flexbox-item :span="3"></flexbox-item>
    <flexbox-item :span="6">
      <x-button type="primary" class="btnbor" @click.native="reg">注册</x-button>
    </flexbox-item>
  </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton,Toast  } from 'vux'
import { config } from "../utils/global"
import axios from 'axios'
export default {
  name: "Register",
  components: {
    Flexbox,
    FlexboxItem,
    XHeader,
    Divider,
    Cell,
    Group,
    XInput,
    XButton,
    Toast
  },
  data() {
    return{
      username: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    reg() {
      if (this.password1 !== this.password2) {
        this.$vux.toast.text('两次密码不一致！', 'bottom')
        return
      }
      const url = config.base_url + '/user/register'
      axios
        .post(url,{
          username: this.username,
          password: this.password1,
        })
        .then(response=>{
          this.$vux.toast.text('注册成功！', 'bottom')
          window.localStorage.setItem('userId', data.data.id)
          window.localStorage.setItem('username', data.data.username)
          this.userId = response.data.data.id
          this.$router.push({path: '/video'})
        })
    }
  }
}
</script>

<style scoped>
  .loimg{
    width: 40px;
  }
  .btnbor{
    border-radius: 20px;
  }
  .ml15{
    margin-left: 15px;
    margin-right: 15px;
  }
  .mt40{
    margin-top: 40px;
  }
  .home-cover {
    width: 100%;
    height: auto;
  }
</style>
