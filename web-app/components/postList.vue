<template>
  <div class="post-list">
    <div v-for="(index, post) in posts | orderBy 'updateDate' -1 " class="post-item bar" v-bind:class="post.type" v-on:click="go(post)" v-link="{ path: '/'+  post.type +'/'+post._id }">
     <div class="bline">
      <div class="title" >
        <h3 class="ui" >
          <span v-if="!type && (post.updateDate > post.date )">[更新]</span>
          <span v-text="post.title"></span>
        </h3>
      </div>
      <div class="content" v-if="post.type=='markdown'">
        <div class="markdown-body" v-html="post.content | marked "></div>
      </div>
      <div class="content" v-else>
        <div class="photo-item-wrap" v-show="!isPreview[$index]">
          <div v-for="photo of post.content" class="photo-item" v-on:click.stop="isPreview.splice(index, 1, true)" >
            <div class="photo-item-inner" v-bind:style="{'background-image' : 'url(' + photo + ')'}"></div>
          </div>
        </div>
        <div v-show="isPreview[index]" v-on:click.stop>
          <span class="ui" v-on:click.stop="isPreview.splice($index, 1, false)" >收起</span>
          <slider :imgs="post.content" on="false"></slider> 
        </div>
      </div>
      <div class="post-item-footer tb">
        <div class="date tc full" v-text="post.date | date"></div>
      </div>
    </div>
  </div>
</div>
</template>
<style>


  

</style>
<script>
  import postService from '../service/post.service'
  import marked from 'marked'
  import Slider from '../widget/slider'
  var min = 1000*60;
  var hour = min*60;
  var day = hour*24;
  var month = day*30;
  var year = month*12;
  export default {
    props : ['posts'],
    components : {
      Slider,
    },
    methods: {
      go(post){
        this.$dispatch('post', post)
      }
    },
    activate(done){
      postService.query({page:this.page})
      .then((data)=>{
        this.posts = data;
        this.isPreview = new Array(this.posts.length)
        done();
      })
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
      isPreview : undefined,
      page : 0,
    }
  }
}
</script>