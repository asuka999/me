<template>
  <div class="container">
    <div class="post-list">
      <div v-for="post in posts" class="post-item bar" v-bind:class="post.type" v-link="{ path: '/markdown/'+post._id }">
        <div class="bline">
          <div class="title" >
            <span v-if="!type && (post.updateDate > post.date )">[更新]</span><h3 class="ui" v-text="post.title"></h3>
          </div>
          <div class="content">
            <div class="markdown-body" v-html="post.content | marked "></div>
          </div>
          <div class="post-item-footer tb">
            <div class="date tc full" v-text="post.date | date"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .post-list{
    margin-top:1rem;
  }



</style>
<script>
  import postService from '../service/post.service'
  import marked from 'marked'

  var min = 1000*60;
  var hour = min*60;
  var day = hour*24;
  var month = day*30;
  var year = month*12;
  export default {
    props:['share$'],
    route: {
      activate : function (transition){
        postService.query({page: this.page, type:'markdown'})
        .then((data)=>{
          this.posts = data;
          transition.next();
        })
      }
    },
    filters : {
      marked,
      date(val){
        var d = new Date() - val;
        if(d > year){
          return d.toLocaleDateString();
        }else if(d > month){
          return parseInt(d/month) + '月前'
        }else if(d > day){
          return parseInt(d/day) + '天前'
        }else if(d>hour){
          return parseInt(d/hour) + '小时前'
        }else {
          return Math.ceil(d/min) + '分钟前'
        }
      },
      title(val){
        if(val.title) return val.title;
        else return 'po了新的' + (val.type=='markdown' ? '文章' : '照片')
      },
  },
  data(){
    return {
      posts : undefined,
      page : 0,
    }
  }
}
</script>