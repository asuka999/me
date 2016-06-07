<template>
  <div class="post-view">
    <div class="container">
     <div class="head">
      <h2 v-text="md.title" class="ui"></h2>
      <div class="tb post-view-date">
        <div class="tc" v-text="md.date | date"></div> 
        <div class="tc full">跟新于：<span v-text="md.updateDate | date "></span></div> 
        <div class="tc"><span class="ui" v-link="{path:'/markdown-edit/'+md._id}">编辑</span><span class="ui" v-on:click="delete">删除</span></div>
      </div>
    </div>
    <section class="content">
      <div class="markdown-body" v-html="md.content | marked">
      </div>
    </section>
    <div class="comment">
      <div id="disqus_thread"></div>
    </div>
  </div>
</div>
</template>

<script>
  import disqus from '../js/disqus'
  import postService from '../service/post.service' 
  import marked from 'marked'

  export default {
    props : ['share$'],
    route: {
      activate: function (transition) {
        if(this.share$.markdown){
          this.md = this.share$.markdown;
          transition.next()
        }else if(this.$route.params.id){
          postService.get({_id: this.$route.params.id})
          .then((data)=>{
            if(data){
              this.md = data;
              transition.next()
            }else{
              this.$route.go({path:'/'})
            }
          })
        }else this.$route.go({path:'/'})
      }
    },
    methods : {
      delete(md){
        postService.delete({_id: this.md._id})
        .then((data)=>{
          console.log(data);
          this.$router.go
        })
      }
    },
    filters : {
      marked : marked,
      date(val){
        return val && val.toLocaleString().slice(0,-3);
      }
    },
    data(){
      return {
        md: { content:''},
        disqusScript : undefined,
      }
    },
    ready(){
      this.disqusScript = disqus(this.$el);
    },
    beforeDestroy(){
      this.disqusScript.remove();
    }
  }
</script>