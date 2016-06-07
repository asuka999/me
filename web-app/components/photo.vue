<template>
  <div class="post-view">
    <div class="container">
      <div class="head">
      <h2 v-text="post.title" class="ui"></h2>
        <div class="tb post-view-date">
        <div class="tc" v-text="post.date | date"></div> 
         <!--  <div class="tc full">跟新于：<span v-text="md.updateDate | date "></span></div> 
          <div class="tc"><div class="ui">编辑</div></div> -->
        </div>
      </div>
      <div class="content" v-else>
        <div class="photo-item-wrap" v-show="!isPreview">
          <div v-for="photo of post.content" class="photo-item" v-on:click="isPreview = true" >
            <div class="photo-item-inner" v-bind:style="{'background-image' : 'url(' + photo + ')'}"></div>
          </div>
        </div>
        <div v-show="isPreview">
          <span class="ui" v-on:click="isPreview = false" >收起</span>
          <slider v-if="post.content" :imgs="post.content" on="false"></slider> 
        </div>
      </div>
      <div class="comment">
        <div id="disqus_thread"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import disqus from '../js/disqus'
  import Slider from '../widget/slider'
  import postService from '../service/post.service' 
  export default {
    components:{
      Slider,
    },
    route: {
      props: ['share$'],
      activate: function (transition) {
        if(this.$root.share$.photo){
          this.post = this.$root.share$.photo;
          transition.next()
        }else if(this.$route.params.id){
          postService.get({_id: this.$route.params.id})
          .then((data)=>{
            if(data){
              this.post = data;
              transition.next()
            }else{
              this.$route.go({path:'/'})
            }
          })
        }else this.$route.go({path:'/'})
      }
    },
    filters : {

      date(val){
        return val && val.toLocaleString().slice(0,-3);
      }
    },
    data(){
      return {
        post: { },
        disqusScript : undefined,
        isPreview: undefined,
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
</script>