<template>
  <div class="more-text" @click="more = !more">
    <rich-text :val="value" marked />
    <ui-button v-if="hasMore">more</ui-button>
  </div>
</template>
<style>
  .more-text {
    img {
      max-height: 30rem;
    }
  }
</style>
<script>
  import RichText from './RichText'
  import UiButton from './UiButton'

  const TAG_REG = /<\/?(?!img)[^\/|>]+\/?>/g
  export default {
    props: {
      rich: {
        type: Boolean,
        default: true,
      },
      val: {
        type: String,
      },
      len: {
        type: Number,
        default: 100,
      },
      marked: {
        type: Boolean,
      }
    },
    components: {
      RichText,
      UiButton,
    },
    computed: {
      value() {
        if (!this.val || this.more || this.val.length < this.len) {
          return this.val 
        }

        const val = this.val.replace(TAG_REG, '')
        if (val.length < this.length) {
          return val
        } else {
          this.val.slice(0, this.len)
        }
      },
      hasMore() {
        return this.val.length > this.value.length
      }
    },
    data() {
      return {
        more: false,
      }
    }
  }
</script>