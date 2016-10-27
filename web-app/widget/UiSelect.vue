<template>
  <div
    class="select"
    role="select"
  >
    <ui-button class="select-value" @click.native="selecting = !selecting">
      {{value.text || value}}
    </ui-button>
    <popover :shown="selecting" class="select-options">
      <ui-button
        v-for="item in items"
        class="select-option"
        role="option"
        @click.native="$emit('change', item), selecting = false"
      >
        {{item.text || item}}
      </ui-button>
    </popover>
  </div>
</template>
<style>
  .select {
    position: relative;
    cursor: pointer;
    
    &-value, &-options {
      background: #fff;
    }

    &, &-value {
      display: inline-block;
    }
  }
</style>
<script>
  import UiButton from './UiButton'
  import Popover from './Popover'
  export default {
    props: {
      items: {
        type: Array,
        default: []
      },
      value: {}
    },
    components: {
      UiButton,
      Popover,
    },
    data(){
      return {
        selecting: false
      }
    }
  }
</script>