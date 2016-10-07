<style>
  .post {

    &-comment {

    }
  }
</style>
<template>
  <div class="post container">
    <div class="post-head">
      <h2 v-text="item.title" class="ui"></h2>
      <div class="tb post-view-date">
        <div class="tc">{{item.date | date}}</div> 
        <div class="tc full">跟新于：<span>{{item.updateDate | date}}</span></div> 
        <div class="tc" v-if="currentUser">
          <router-link :to="'/edit/' + item.id">编辑</router-link>
          <ui-button v-on:click.native="remove">删除</ui-button>
        </div>
      </div>
    </div>
    <section class="post-content">
      <rich-text :content="item.content" marked />
    </section>
    <div class="post-comment">
      <div id="disqus_thread" />
    </div>
  </div>
</template>

<script>
  import RichText from '../widget/RichText'
  import disqus from '../libs/disqus'

  export default {
    components: {
      RichText
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
        return val && new Date(val).toLocaleString().slice(0, -3)
      }
    },
    methods: {
      remove() {
        return this.$store.dispatch('removePost', this.item.id)
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
