<template>
   <div class="photos" @click="isPreview = !isPreview">
    <slider
      v-if="isPreview"
      :on="false"
      :items="items"
    />
    <div class="photo-items" v-else>
      <div v-for="item of items" class="photo-item">
        <img class="photo-item-inner" :src="item" />
      </div>
    </div>
  </div>
</template>
<style>
  .photos {
    &:after {
      content: '';
      clear: both;
      display: block;
      height: 0;
    }
  }

  .photo-item {
    position: relative;
    width: 33%;
    padding-top: 33%;
    float: left;
    margin-bottom: 15px;

    &:not(:first-child) {
      margin-left: 15px;
    }

    &-inner {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
<script>
  import Slider from '../../widget/Slider'
  export default {
    props: {
      items: {
        type: Array
      }
    },
    components: {
      Slider,
    },
    data() {
      return {
        isPreview: false,
      }
    }
  }
</script>