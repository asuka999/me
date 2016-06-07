<template>
  <index-header
  :share$="share$"></index-header>
  <router-view
  :share$="share$"></router-view>
</template>
<script>
  import IndexHeader from './indexHeader'
  import service from '../service/user.service'
  export default {
    components : {
      IndexHeader,
    },
    data(){
      service.theme()
      .then((data)=>{
        this.share$.user = data;
      });
      return {
        share$ : {
          user : undefined,
          markdown: undefined,
          photo : undefined, 
        }
      }
    },
    events : {
      login(data){
        this.share$.user = data;
      },
      post(data){
        this.share$[data.type] = data;
      },
      'theme.imgs.add'  :function (data){
        this.share$.user.imgs.push(data)
      },
      'theme.imgs.del'  :function (data){
        this.share$.user.imgs.splice(this.share$.user.imgs.indexOf(data), 1)
      },
    }
  }
</script>
