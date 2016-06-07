<template>
  <modal id="photo_edit" class="photo-edit">
    <div slot="head"></div>
    <div slot="section">
      <div class="title">
        <input type="text" class="ui" v-model="post.title" placeholder="title"/>
      </div>
      <div class="content photo-item-wrap">
        <div class="photo-item" v-for="img of post.content">
          <span class="btn-remove" v-on:click="remove($index)"><i class="ui ic-cross"></i></span>
          <div class="photo-item-inner" v-bind:style="{ 'background-image' : 'url(' + img.url+ ')' }" ></div>
        </div>
        <span class="ui file btn-add">
          <i class="ui ic-plus lg"></i>
          <input type="file" v-on:change="add" accept="image/gif, image/jpeg"/>
        </span>
      </div>
    </div>
    <span class="tc"><button class="ui" v-on:click="save">确定</button></span>
    <span class="tc"><button class="ui">取消</button></span>
  </modal>
</template>
<style>
  @import "../less/style.less";
  @import "../less/reuse.less";
  .photo-item-wrap{
    font-size: 0;
  }
  .photo-item{
    width: 30%;
    width: ~"calc(33.3% - 5.33px)";
    padding-top: 30%;
    padding-top: ~"calc(33.3% - 5.33px)";
    position: relative;
    display: inline-block;
    margin-bottom: .5rem;
    font-size: initial;
    &:not(:nth-child(3n+1)){
      margin-left: .5rem;
    }
    .photo-item-inner{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .btn-remove{
      position: absolute;
      top:0;
      right:0;
    }
  }
  .photo-edit{
    .content{
      padding-top:@pd;
    }
    
    
    .btn-add{
      border:1px solid @border;
      width: 30%;
      width: ~"calc(33.3% - 5.33px)";
      padding-top: 30%;
      margin-bottom: .5rem;
      padding-top: ~"calc(33.3% - 7.33px)";
      position: relative;
      box-sizing: border-box;
      &:not(:nth-child(3n+1)){
        margin-left: .5rem;
      };
      >i{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%,0);
      }
    }
  }
  

</style>
<script>
  import Modal from '../widget/modal'
  import postService from '../service/post.service'
  import service from '../service/service'
  export default {
    components : {
      Modal,
    },
    methods :{
      add(e){
        //todo preivew
        
        var file = e.target.files[0];
        for(var c of this.post.content){
          //todo here 无法检测重复图片。
          // 检测 create 的 url?
          if(c.file == file) return;
        }
        this.post.content.push({
          url : URL.createObjectURL(file),
          file : file,
        })
      },
      remove(i){
        URL.revokeObjectURL(this.post.content[i].url);
        this.post.content.splice(i,1);
      },
      save(){
        var content = this.post.content;
        postService.photo(this.post, this.token)
        .then((data)=>{
          console.log(data)
          // release content,
        })
        .catch((data)=>{
          console.log(data);
        })
      }
    },
    data(){
      return {
        post : {
          content: [],
        },
        token : undefined
      }
    },
    events : {
      'modal.state': function(active){
        active && service.token()
        .then((token)=>{
          this.token = token
        })
      }
    }
  }
</script>
