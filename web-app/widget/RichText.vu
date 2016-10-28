<style>
  .richtext img {
    display: block;
    margin: .5rem 0;
  }
</style>
<template>
  <component
    :is="tag"
    class="richtext"
    :class="{'markdown-body': this.marked}"
    v-html="html"
  >
  </component>
</template>
<script>
  import marked from 'marked'
  import 'github-markdown-css'
  export default {
    props: {
      val: {
        type: String,
      },
      marked: {
        type: Boolean,
        default: false
      },
      tag: {
        type: String,
        default: 'span',
      }
    },
    computed: {
      html() {
        return this.marked ? marked(this.val || '') : this.val
      }
    }
  }
</script>