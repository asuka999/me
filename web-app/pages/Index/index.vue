<template>
  <div class="index">
    <div class="index-body">
      <div class="index-content">
        <rich-text class="word" :val="item.content" />
      </div>
      <div class="index-footer">
        <span>{{item.date | date}}</span> 
      </div>
    </div>
    <div class="index-more">
      <div class="container">
        <ui-button @click.native="shown = !shown" class="index-more-inner">
          <span>more</span>
          <i class="icon-down" />
        </ui-button>
        <modal
          :shown="shown"
          @close="shown =! shown"
        >
          hahahahahahah...wait
        </modal>
      </div>
    </div>
  </div>
</template>
<style>
  .index {
    &-body {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &-content{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      font-size: 72px;
    }
  
    &-footer {
      font-size: 32px;
      text-align: center;
      padding: 32px 0;
      margin-bottom: 64px;
    }

    &-more {
      &-inner.btn {
        width: 100%;
        background-color: #ccc;
        padding: 20px;
        color: #fff;
        font-size: 32px;
        border-radius: 4px;
      }
    }
  }
</style>
<script>
  import RichText from '../../widget/Richtext.vue'
  import UiButton from '../../widget/UiButton.vue'
  import Modal from '../../widget/UiModal'
  import {time} from '../../libs/util'
  import '../../assets/iconfont/index.css'

  export default {
    components: {
      RichText,
      UiButton,
      Modal,
    },
    computed: {
      item() {
        const {posts} = this.$store.state
        return posts[Object.keys(posts).find(key => posts[key].lock)] || {}
      }
    },
    filters: {
      date(val) {
        const d = new Date(val)
        return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`
      }
    },
    data() {
      return {
        shown: false,
      }
    },
    fetch(store) {
      return store.dispatch('index')
    }
  }
</script>