<template>
  <div class="posts">
    <posts-header />
    <div class="posts-body">
      <post-list :items="items" />
    </div> 
  </div>
</template>
<style>
  .posts-body {
    padding-top: 2rem;
  }
</style>
<script>
  import PostsHeader from './PostsHeader'
  import PostList from './PostList'
  export default {
    components: {
      PostsHeader,
      PostList,
    },
    computed: {
      items() {
        return this.$store.state.posts
      },
    },
    fetch(store) {
      return store.dispatch('posts')
    }
  }
</script>