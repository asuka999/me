<template>
  <div class="markdown-edit" v-bind:class="{container:!isPreview}">
    <div class="title">
      <input type="text" class="ui" v-model="markdown.title">
    </div>
    <div class="content" v-el:content v-on:resize="setSize">
      <div class="edit" v-bind:class="{active:!isPreview}" >
        <textarea class="ui" v-model="markdown.content" debounce="300" v-el:text></textarea>
        <div class="edit-tool">
          <span class="file ui"><span class="">图片</span><input type="file" accept="image/*" v-on:change="addImg"/></span>
          <span class="ui" v-on:click="save">Po</span>
        </div>
      </div>
      <div class="markdown-preview" v-bind:class="{active:isPreview}">
        <span class="ui btn-hide"  v-on:click="isPreview = !isPreview">隐藏</span>
        <span class="ui btn-show"  v-on:click="isPreview = !isPreview">预览</span>
        <div class="markdown-body"  v-if="isPreview" v-html="markdown.content | marked"></div>
      </div>  
    </div>
  </div>
</template>
<style>
  @import '../less/style.less';
  .markdown-edit{
    .content{
      overflow: hidden;
      width:100%;
      position: relative;
      .edit {
        float : left;
        width : 50%;
        height: 100%;
       
        textarea{
          height:100%;
        }
        &.active{
          width: 100%;
        }
        .edit-tool{
          position: absolute;
          bottom: 0;
        }
      }
      .markdown-preview {
        position: absolute;
        top:0;
        right:0;
        box-sizing: border-box;
        .btn-hide{
          position:absolute;
          top:0;
          right:0;
        }
        .markdown-body, .btn-hide{
            display: none;
        }
        &.active{
          width : 50%;
          height: 100%;
          padding: @pd-v @pd;
          border-left: 1px solid @border;
          .markdown-body, .btn-hide{
            display: block;
          }
          .btn-show{
            display: none;
          }
        }
      }
    }
    .title  {
        border-bottom: 1px solid #ccc;
        input {
            font-size: 28px;
            padding: 0.875rem  1.313rem;
        }
      }
  }

</style>
<script>
  import postService from '../service/post.service'
  import marked from 'marked'
  import 'github-markdown-css'
  export default {
    props : ['share$'],
    route: {
      activate: function (transition) {
        if(this.$route.params.id){
          if(this.share$.markdown && this.share$.markdown._id == this.$route.params.id){
            this.markdown = Object.assign(this.md,this.share$.markdown ); 
            transition.next();
          }else{
            postService.get({_id: this.$route.params.id})
            .then((data)=>{
              if(data){
                this.markdown = data;
                transition.next()
              }else{
                this.$route.go({path:'/'})
              }
            })
          }
        }else transition.next();
      }
    },
    filters: {
      marked: marked
    },
    methods : {
      setSize(){
        this.$els.content.style.height =  (innerHeight - this.$els.content.offsetTop) + 'px';
      },
     
      addImg(e){
        var st = this.$els.text.selectionStart
        ,end =  this.$els.text.selectionEnd;
        var file = e.target.files[0]
        postService.addImg(file)
        .then((data)=>{
         // this.markdown.content.splice(st, end-st, '<img src="' + data + '" />')
          this.markdown.content = this.markdown.content.slice(0,st) +
          '<img src="' + data + '" />' + 
          this.markdown.content.slice(end);
        })
      },
      save(){
        if(this.$route.params.id){
          postService.update({_id : this.$route.params.id , title : this.markdown.title, content: this.markdown.content})
          .then((data)=>{
            this.md = Object(this.md, data);
            this.$dispatch('post', this.md);
            this.$router.go({path:'/markdown/' + data._id  });
          })
        }else{
          postService.markdown(this.markdown)
          .then((data)=>{
            // go markdown/:id页。。。。
            // save thae data to share;
          
            this.$router.go({path:'/markdown/' + data._id });
          })
        }
      },
    },
    ready(){
      this.setSize();
    },
    data(){
      return {
        markdown : {
          content: '',
        },
        isPreview : false,
      }
    }
  }
</script>