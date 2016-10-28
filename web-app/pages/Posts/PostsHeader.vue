<template>
  <div class="posts-header">
    <slider class="posts-header-slider" :items="items"/>
  </div>
</template>
<style>
  .posts-header {
    &-slider {
      height: 30rem;
      overflow: hidden;
    }
  }
</style>
<script>
  import Slider from '../../widget/UiSlider'
  export default {
    components: {
      Slider
    },
    computed: {
      items() {
        const {posts} = this.$store.state
        const rs = []
        Object.keys(posts).some(key => {
          if (posts[key].type === 'photo') {
            rs.push(...posts[key].content)
          }
          return rs.length >= 4
        })
        return rs
      }
    }
  }

</script>