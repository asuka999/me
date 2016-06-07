<template>
  <div class="container" v-if="user">
    <div class="module">
      <div><input type="text" class="ui" placeholder="string1" v-model="user.profile1" ></div>
      <div><input type="text" class="ui" placeholder="string2" v-model="user.profile2"></div>
      <div><span v-on:click="profile" class="ui">保存</span></div>
    </div>
    <div class="module">
      <div class="photo-item-wrap">
        <div class="photo-item" v-for="img of user.imgs" >
         
          <div class="photo-item-inner" v-bind:style="{'background-image': img? 'url('+ img+')' : undefined }"></div>
           <span class="btn-remove" v-on:click="deleteImg(img)"><i class="ui ic-cross"></i></span>
        </div>
      </div>
      <div>
        <div class="preview">
           <div class="preview-inner" v-bind:style="{'background-image': preview? 'url('+ preview+')' : undefined }"></div>
        </div>
        <div class="tb">
          <div class="tc"><div class="file"><span class="ui">添加照片</span><input type="file" class="ui" accept="image/*" v-on:change="add"></div></div>
          <div class="tc full"><span class="ui" v-on:click="insertImg">确定</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .preview{
    width : 100%;
    padding-top: 75%;
    position: relative;
    .preview-inner{
      position: absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>
<script>
  import {$extend} from '../js/util'
  import userService from '../service/user.service'
  import service from '../service/service'
  export default {
    props: ['share$'],
    route:{
      activate(t){
        if(this.share$.user && this.share$.user.name){
          this.user = $extend({imgs:[]}, this.share$.user)
          t.next();
        }else{
          this.$router.go({path:'/login'})
        }
      }
    },
    methods: {
      add(e){
        this.preview &&  URL.revokeObjectURL(this.preview);
        this.file = e.target.files[0];
        this.preview = URL.createObjectURL(this.file,this.token);
      },
      insertImg(){
        userService.insertImg(this.file, this.token)
        .then((data)=>{
          URL.revokeObjectURL(this.preview);
          this.preview = undefined;
          this.file = undefined;
          this.user.imgs.push(data);
          this.$dispatch('theme.imgs.add', data)
        })
      },
      deleteImg(img){
        userService.deleteImg(img)
          .then((data)=>{
           
            this.$dispatch('theme.imgs.del', img)
          })
      },
      profile(){
        userService.profile(this.user)
        .then((data)=>{
          this.$dispatch('profile', data)
        })
      },
    },  
    data(){
      service.token()
      .then(data => this.token = data);
      return {
        preview : undefined,
        file : undefined,
        user : undefined,
        token : undefined,
      }
    }
  }
</script>
