<style>
  .post-item {
    padding: 15px 0;

    &-meta {
      line-height: 1.5;
      margin-bottom: 10px;
      color: #999;
    }

    &-content {
      margin-bottom: 10px;
    }

    &-title {
      line-height: 2rem;
      margin-bottom: 5px;
      text-decoration: none;
      color: initial;
    }

    &-time {
      color: #999;
      font-size: .75em;
    }
  }
</style>
<template>
  <div class="post-list container">
    <div v-for="item in items" class="post-item">
      <router-link :to="'/posts/' + item.id" class="post-item-title">
        <h3 v-text="item.title" />
      </router-link>
      <div class="post-item-content">
        <more-text
          class="word"
          v-if="item.type=== 'markdown'"
          :val="item.content"
        />
        <photos
          v-else
          :items="item.content"
        />
      </div>
      <div class="post-item-time">{{item.date | time}}</div>
    </div>
  </div>
</template>

<script>
  import {time} from '../../libs/util'
  import MoreText from '../../widget/MoreText'
  import Photos from './Photos'
  export default {
    props: ['items'],
    components: {
      MoreText,
      Photos,
    },
    filters: {
      time,
    }
  }
</script>