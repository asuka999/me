<template>
  <header class="ui">
    <div class="container">
      <div class="left">
        <div class="tabs">
          <ul class="tabs">
            <li class="tab" v-link="{ path: '/' }"><span class="ui" >home</span></li>
            <li class="tab" v-link="{ path: '/markdown' }"><span class="ui">markdown</span></li>
            <li class="tab" v-link="{ path: '/photo' }"><span class="ui">photo</span></li>
          </ul>
        </div>
      </div>
      <div class="right" v-if="share$.user && share$.user.isLogin">
        <ul class="tabs">
          <li class="tab" v-trigger:modal="#photo_edit"><span class="ui">post</span></li>
          <li class="tab" v-link="{ path: '/markdown-edit' }"><span class="ui">markdown</span></li>
          <li class="tab" v-link="{ path: '/setting' }"><span class="ui">setting</span></li>
        </ul>
      </div>
    </div>
  </header>
  <photo-edit></photo-edit>
</template>
<style>
  @import '../less/style.less';
  header.ui {
    background-color: @theme;
    color: #fff;
    .tab:after{
      background-color :#fff;
    };
  }
</style>
<script>
import PhotoEdit from './photoEdit'
export default {
  props : ['share$'],
  components : {
    PhotoEdit
  },
}
</script>
