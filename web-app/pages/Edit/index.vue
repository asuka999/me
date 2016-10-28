<style>
  .edit {
    &-title {
      border-bottom: 1px solid #ccc;

      input {
        width: 100%;
        padding: 0.875rem  1.313rem;
        font-size: 28px;
        border: 0;
      }
    }

    &-actions {
      position: fixed;
      bottom: 0;
    }
  }
</style>
<template>
  <form
    class="edit container"
    @submit="handleSubmit"
  >
    <div class="edit-title">
      <ui-input
        :value="title"
        v-on:input.native="title = $event.target.value"
      />
    </div>
    <component
      :is="'edit-' + type"
      class="edit-body"
      :onInput="handleInput"
      :value="content"
    />
    <div class="edit-actions">
      <ui-button type="submit">Po</ui-button>
      <ui-button
        v-if="!item"
        @click.native="type = type === 'photo' ? 'markdown' : 'photo' "
      >
        <i :class="type === 'photo' ? 'icon-paper': 'icon-camera-o' " />
      </ui-button>
    </div>
  </form>
</template>
<script>
  import UiButton from '../../widget/UiButton.vue'
  import UiInput from '../../widget/UiInput.vue'
  import EditMarkdown from './EditMarkdown.vue'
  import EditPhoto from './EditPhoto'
  import {LOCK_REG} from '../../../constants'

  export default {
    components: {
      UiButton,
      UiInput,
      EditPhoto,
      EditMarkdown
    },
    computed: {
      item() {
        const rs = this.$store.state.posts[this.$route.params.id]
        if (rs) {
          this.title = rs.title
          this.type = rs.type
          this.content = rs.content
        }
        return rs
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        const {content, type, title, item} = this

        if (!content) {
          return
        }
       
        if (type === 'markdown' && !LOCK_REG.test(content) && !title) {
          return
        }

        const body = {title, type, content}
        if (item) {
          body.id = item.id
          this.$store.dispatch('updatePost', body)
        } else {
          this.$store.dispatch('post', body)
        }
      },
      handleInput(content) {
        this.content = content
      }
    },
    data(){
      return {
        title: '',
        content: null,
        type: 'markdown',
      }
    },
    fetch(store) {
      const {id} = store.state.route.params
      return id && store.dispatch('getPost', id)
    }
  }
</script>