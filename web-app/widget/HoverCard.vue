<template>
  <div
    class="hovercard"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="hovercard-inner" ref="inner"><slot /></div>
    <popover
      class="hovercard-card"
      :shown="hover"
    >
      <slot name="card"></slot>
    </popover>
  </div>
</template>
<style>
  .hovercard {
    position: relative;
  }

  .hovercard-inner {
    display: inline-block;
  }

</style>
<script>
  import Popover from './popover.vue'
  export default {
    components: {
      Popover,
    },
    methods: {
      handleMouseEnter() {
        this.hover = true
      },
      handleMouseLeave() {
        this.hover = false
      },
    },

    data() {
      return {
        hover: false,
      }
    }
  }
</script>