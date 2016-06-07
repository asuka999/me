<template>
  <slider :imgs="share$.user && share$.user.imgs">
  </slider>
  <div class="module">

    <div class="container">
      <div class="home-head" v-if="share$.user">
        <h1 class="ui" v-text="share$.user.profile1"></h1>
        <p class="ui" v-text="share$.user.profile2"></p>
      </div>
      <post-list
        :posts="posts"></post-list>
    </div>
  </div>
</template>
<style>
  @import '../less/style.less';
  .home-head {
    text-align: right;
    padding: @pd-v 0;
    margin-bottom: 2*@pd-v;
    h1.ui{
      font-size: 5em;
    }
    p.ui{
      font-size: 3em;
    }

  }
</style>
<script>
  import Slider from '../widget/slider'
  import PostList from '../components/postList'
  export default {
    props : ['share$'],
    components : {
      Slider,
      PostList,
    },
  }
</script>