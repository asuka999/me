<template>
  <div class="login">
    <div class="err" v-text="err"></div>
    <div><input type="text" class="ui" v-model="u.name" placeholder="username"></div>
    <div><input type="password" class="ui" v-model="u.password" placeholder="password"></div>
    <span class="ui" v-on:click="login">确定</span>
  </div>
</template>

<script>
  import userService from '../service/user.service'
  export default {
    props: ['share$'],
    methods : {
      login(){
        userService.login(this.u)
        .then((data)=>{
          this.$dispatch('login', data);
          this.$router.go({ path: '/'});
        })
        .catch((res)=>{
          this.err=res.data.message +' : 密码错误';
        })
      }
    },
    data(){
      return {
        u: {},
        err : undefined,
      }
    }
  }
</script>