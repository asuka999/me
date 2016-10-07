<template>
  <div class="index">
    <div class="index-card" v-for="item in items" >
      <HoverCard v-if="item.post">
        <span class="word hover" v-html="item.word" :data-k="item.k" :data-key="item.key" />
        <div slot="card" class="index-card-post">
          <img :src="item.post.img + '!c'" />
          <span class="index-card-post-title" v-text="item.post.title" />
        </div>
      </HoverCard>
      <div v-else class="word" :data-k="item.k" :data-key="item.key" v-html="item.word" />
    </div>
  </div>
</template>
<style>

  .index {
    font-size: 0;
  }

  .index-card {
    display: inline-block;
    width: 80px;
    height: 80px;
    line-height: 83px;
    text-align: center;
    font-size: 42px;
    &:hover {
      color: #000;
    }
    


  }

   .index-card-post {
      position: relative;
          border-radius: 3px;
          overflow: hidden;
}
     .index-card-post-title {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 24px;
        color: #fff;
        line-height: initial;
      }
    
</style>
<script>
import HoverCard from '../widget/HoverCard.vue'
import {rand} from '../libs/util'
import words from '../../constants/words'
import '../assets/iconfont/index.css'
const MIN_LEN = 100
export default {
  components: {
    HoverCard
  },
  data() {
    const len = 3 // rand(230, 100)
    const wordKeys = Object.keys(words)
    const items = []
    const posts = [{
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }, {
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }, {
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }, {
      img: 'http://7xpjb6.com1.z0.glb.clouddn.com/FullSizeRender%201.jpg',
      title: 'sjahdjhsajdmbnm'
    }]

    for (let i = 0; i < len; i++) {
      const k = rand(230)
      const key = wordKeys[k]
      items.push({k, key, word: words[key]})
    }

    posts.forEach(post => items[rand(len, 0)].post = post)

    return {
      items,
    }
  },
  fetch(store) {
    return store.dispatch('test')
  }
}
</script>