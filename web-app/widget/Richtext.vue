<style>
  .richtext img {
    display: block;
    margin: .5rem 0;
  }
</style>
<template>
  <div class="richtext" :class="{'markdown-body': this.marked}" v-html="html">
  </div>
</template>
<script>
  import marked from 'marked'
  import 'github-markdown-css'
  export default {
    props: {
      content: {
        type: String
      },
      marked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      html() {
        return this.marked ? marked(this.content) : this.content
      }
    }
  }
</script>