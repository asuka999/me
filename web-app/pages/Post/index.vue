<style>
  .post {
    &-head {
      margin-top: 100px;
    }

    &-title {
      display: flex;
      margin-bottom: 20px;

      &Text {
        flex: 1;
        margin: 0;
      }
    }

    &-actions {
      align-self: flex-end
    }

    &-meta {
      margin-bottom: 20px;

      &-date {
        font-size: 18px;
      }

      &-date, &-updatedate {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }

    &-content {
      margin-bottom: 20px;
    }
  }
</style>
<template>
  <div class="post container">
    <div class="post-head">
      <div class="post-title">
        <h1 class="post-titleText">{{item.title}}</h1>
        <div class="post-actions" v-if="currentUser">
          <router-link :to="'/edit/' + item.id">编辑</router-link>
          <ui-button @click.native="remove">删除</ui-button>
        </div>
      </div>
      <div class="post-meta">
        <div class="post-meta-date">{{item.date | date}}</div> 
        <div class="post-meta-updatedate">跟新于：<span>{{item.updateDate | date}}</span></div> 
      </div>
    </div>
    <section class="post-content">
      <rich-text :val="item.content" marked />
    </section>
    <div class="post-comment">
      <div id="disqus_thread" />
    </div>
  </div>
</template>

<script>
  import {time} from '../../libs/util'
  import RichText from '../../widget/Richtext'
  import UiButton from '../../widget/UiButton'
  import disqus from '../../libs/disqus'

  export default {
    components: {
      RichText,
      UiButton,
    },
    computed: {
      item() {
        return this.$store.state.posts[this.$route.params.id]
      },
      currentUser() {
        return this.$store.state.currentUser
      }
    },
    filters: {
      date(val) {
        return time(val, 'yyyy-MM-dd HH:mm')
      }
    },
    methods: {
      remove() {
        return this.$store.dispatch('deletePost', this.item.id)
      }
    },
    data(){
      return {disqusScript: undefined}
    },
    mounted(){
      this.disqusScript = disqus(this.$el)
    },
    beforeDestroy(){
      this.disqusScript.remove();
    },
    fetch(store) {
      return store.dispatch('getPost', store.state.route.params.id)
    }
  }
</script>
