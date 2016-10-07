<template>
  <div class="posts-header">
    <slider class="posts-header-slider" :items="items"/>
  </div>
</template>
<style>
  .posts-header {
    &-slider {
      height: 21rem;
      overflow: hidden;
    }
  }
</style>
<script>
  import Slider from '../../widget/Slider'
  export default {
    components: {
      Slider
    },
    data() {
      return {
        items: [
          "http://7xpjb6.com1.z0.glb.clouddn.com//FvpsJlGfaCEdsNZe9M8-gJlMGK5b",
          "http://7xpjb6.com1.z0.glb.clouddn.com//FoyPxEMLmVBQ3QD9UF3-VRJcmkZg",
          "http://7xpjb6.com1.z0.glb.clouddn.com//FngUC9Jb-qdYQKQFic9gu7fkqRPR",
          "http://7xpjb6.com1.z0.glb.clouddn.com//FtKhMSZW38z9HojnJjNMCMHPTqWc",
        ]
      }
    }
  }

</script>