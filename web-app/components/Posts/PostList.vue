<style>
  .post-item {
    text-decoration: none;
    color: initial;

    &-meta {
      line-height: 1.5;
      margin-bottom: 10px;
    }

    &-title {
      line-height: 2rem;
      margin-bottom: 5px;
    }
  }
</style>
<template>
  <div class="post-list container">
    <router-link :to="'/posts/' + item.id" v-for="item in items" class="post-item">
      <div class="post-item-meta">
        <span class="post-item-action">
          <span>[{{item | action}}]</span> 了 {{ item.type === 'markdown' ? '文章' : '照片' }}
        </span>
      </div>
      <div class="post-item-title">
        <h3 v-text="item.title" />
      </div>
      <div class="post-item-content">
        <rich-text
          v-if="item.type=== 'markdown'"
          :content="item.content"
          marked
        />
        <div v-else class="photo-item">
          <div v-for="photo of item.content" class="photo-item" >
            <div class="photo-item-inner" v-bind:style="{'background-image' : 'url(' + photo + ')'}"></div>
          </div>
        </div>
        <!-- more !-->
      </div>
      <div class="post-item-time">{{item.date | time}}</div>
    </router-link>
  </div>
</template>

<script>
  import {time} from '../../libs/util'
  import RichText from '../../widget/RichText'

  export default {
    props: ['items'],
    components: {
      RichText,
    },
    filters: {
      time,
      action(val) {
        return val.updateDate > val.date ? '更新' : 'Po' 
      }
    }
  }
</script>