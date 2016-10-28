<style>
  .edit-markdown {
    display: flex;
    position: relative;


    &-tool {
      position: absolute;
      right: 0;
    }

    &-content, &-preview{
      flex: 1;
    }
    
    &-preview {
      padding: 10px 15px;
      border-left: 1px solid #ccc;

      .word {
        font-size: 18px;
      }
    }

    &-textarea {
      height: calc(100% - 53px);
    }
  }
</style>

<template>
  <div v-else class="edit-markdown">
    <div class="edit-markdown-tool">
      <ui-button @click.native="isPreview = !isPreview" :class="{'is-active': isPreview}">
        <i class="icon-eye" />
      </ui-button>
      <ui-button>
        <filefield
          @change.native="handleAddImage"

        >
          <i class="icon-img" />
        </filefield>
      </ui-button>
      <ui-button @click.native="mode = !mode">
        <i :class="mode ? 'icon-lock' : 'icon-unlock'" />
      </ui-button>
    </div>
    <div class="edit-markdown-content">
      <ui-textarea
        class="edit-markdown-textarea"
        :value="rawVal" 
        @input.native="handleInput" 
      />
    </div>
    <div class="edit-markdown-preview" v-if="isPreview">
      <rich-text :class="{'word': mode}" :val="value" marked />
    </div>
  </div>
</template>
<script>
  import UiButton from '../../widget/UiButton.vue'
  import UiTextarea from '../../widget/UiTextarea.vue'
  import RichText from '../../widget/RichText.vue'
  import Filefield from '../../widget/Filefield.vue'
  import '../../assets/iconfont/index.css'

  const fetch = store => {
    return store.dispatch('words')
  }

  function getRawVal(words, val) {
    return val ? val.replace(/(&#xe6\w{2};)/g, match => words.find(({key}) => key === match).val) : ''
  }

  export default {
    props: ['onInput', 'value'],
    components: {
      UiButton,
      UiTextarea,
      RichText,
      Filefield,
    },
    methods: {
      handleInput(e) {
        this.rawVal = e.target.value
        this.onInput(this.mode ?
          [...this.rawVal].map(item => 
            (this.words.find(({val}) => val === item) || {key: item}).key
          ).join('') : this.rawVal)
      },
      handleAddImage(e) {
        const file = e.target.files[0]
        if (!file) {
          return
        }
        this.$store.dispatch('upload', [file])
        .then(datas => {
          if (!datas.length) {
            return
          }
          const rs = `<img src="${datas[0]}" />`
          this.rawVal += rs
          this.onInput((this.value || this.rawVal) + rs)
        })
      }
    },
    computed: {
      words() {
        return this.$store.state.words
      },
      // val() {
      //   // to do : not work
      //   const rawVal = this.rawVal
      //   const rs = this.mode ?
      //     [...rawVal].map(item => 
      //       (this.words.find(({val}) => val === item) || {key: item}).key
      //     ).join('') : rawVal
      //   this.onInput(rs)
      //   return rs
      // }
    },
    watch: {
      value(val, oldVal) {
        if (val && !oldVal) {
          this.rawVal = getRawVal(this.words, val)
        }
      } 
    },
    mounted(){
      if (!this.words) {
        fetch(this.$store)
      }
    },
    data() {
      return {
        isPreview: false,
        mode: false,
        rawVal: ''
      }
    },
    fetch,
  }
</script>
