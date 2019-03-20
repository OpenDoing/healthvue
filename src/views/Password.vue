<template>
  <div>
    <x-header>修改密码</x-header>
    <flexbox orient="vertical">
      <flexbox-item>
        <group>
          <x-input v-model="opassword" type="password" placeholder="原始密码" required>
            <img slot="label" src="../assets/img/username.svg" class="ml15"/>
          </x-input>
        </group>
      </flexbox-item>
      <flexbox-item>
        <group>
          <x-input v-model="npassword1" type="password" placeholder="修改密码" required>
            <img slot="label" src="../assets/img/password.svg" class="ml15"/>
          </x-input>
        </group>
      </flexbox-item>
      <flexbox-item>
        <group>
          <x-input v-model="npassword2" type="password" placeholder="确认密码" required>
            <img slot="label" src="../assets/img/password.svg" class="ml15"/>
          </x-input>
        </group>
      </flexbox-item>
    </flexbox>

    <flexbox class="mt40">
      <flexbox-item :span="3"></flexbox-item>
      <flexbox-item :span="6">
        <x-button type="primary" class="btnbor" @click.native="changePassword">修改</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem,XHeader ,Divider,Cell,Group,XInput,XButton  } from 'vux'
import {config} from "../utils/global"
import axios from 'axios'
export default {
  name: "Password",
  components: {
    Flexbox,
    FlexboxItem,
    XHeader,
    Divider,
    Cell,
    Group,
    XInput,
    XButton
  },
  data() {
    return {
      opassword: '',
      npassword1: '',
      npassword2: ''
    }
  },
  methods: {
    changePassword() {
      const userId = localStorage.getItem('userId')
      const url = config.base_url + '/user/password?userId=' + userId + '&opassword=' + this.opassword + '&npassword=' + this.npassword1
      if (this.npassword1 !== this.npassword2) {
        this.$vux.toast.text('两次密码不一致', 'bottom')
      } else {
        axios
          .post(url)
          .then(response=>{
            let data = response.data
            this.$vux.toast.text('修改成功', 'bottom')
            window.localStorage.clear();
            this.$router.push({path: '/'})
          })
          .catch(err=>{
            this.$vux.toast.text('密码错误', 'bottom')
          })
      }
    }
  },
}
</script>

<style scoped>

</style>
