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

    &-body {
      position: relative;
      display: flex;
    }

    &-tool {
      position: absolute;
      right: 0;
    }

    &-content {
      flex: 1;
    }

    &-preview {
      flex: 1;
      padding: 10px 15px;
      border-left: 1px solid #ccc;

      .word {
        font-size: 18px;
      }
    }

    &-actions {
      position: fixed;
      bottom: 0;
    }

    &-textarea {
      height: calc(100% - 53px);
    }

    &-content-item, &-addfile {
      position: relative;
      float: left;
      width: calc(33% - 10px);
      display: inline-block;
      padding-top: calc(33% - 10px);
      margin-top: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      overflow: hidden;

      &:not(:nth-child(3n + 1)) {
        margin-left: 10px;
      }
    }

    &-content-item {
      &-img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      &-remove.btn{
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        z-index: 1;
        padding: 4px;
      }
    }

    &-addfile .filefield {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      font-size: 48px;
    }
  }
</style>

<template>
  <div class="edit" :class="{container: !isPreview}">
    <div class="edit-title">
      <ui-input :value="title" v-on:input.native="title = $event.target.value" />
    </div>
    <div v-if="type === 'photo'" class="edit-body">
      <div class="edit-content">
        <div class="edit-content-item" v-for="(img, index) in imgs">
          <ui-button class="edit-content-item-remove" @click.native="handleRemoveImage(index)">
            <i class="icon-cross" />
          </ui-button>
          <div class="edit-content-item-img" :style="{ 'background-image' : 'url(' + img.url+ ')' }" />
        </div>
        <div class="edit-addfile">
          <filefield v-on:change.native="handleAddImage">
            <i class="icon-plus" />
          </filefield>
        </div>
      </div>
    </div>
    <div v-else class="edit-body">
      <div class="edit-tool">
        <ui-button @click.native="isPreview = !isPreview" :class="{'is-active': isPreview}">
          <i class="icon-eye" />
        </ui-button>
        <ui-button>
          <filefield>
            <i class="icon-img" />
          </filefield>
        </ui-button>
      </div>
      <div class="edit-content">
        <ui-textarea
          class="edit-textarea"
          :value="content" 
          @input.native="handleInput" 
        />
      </div>
      <div class="edit-preview" v-if="isPreview">
        <rich-text :class="{'word': mode}" :content="content" marked />
      </div>
    </div>
    <div class="edit-actions">
      <ui-button
        type="submit"
        @click.native="handleSubmit"
      >
        Po
      </ui-button>
      <ui-button
        @click.native="type = type === 'photo' ? 'markdown' : 'photo' "
        v-text=""
      >
        <i :class="type === 'photo' ? 'icon-paper': 'icon-camera-o' " />
      </ui-button>
      <ui-button
        @click.native="mode = !mode"
      >
        <i :class="mode ? 'icon-lock' : 'icon-unlock'" />
      </ui-button>
    </div>
  </div>
</template>

<script>
  import UiButton from '../widget/UiButton'
  import UiInput from '../widget/UiInput'
  import UiTextarea from '../widget/UiTextarea'
  import Filefield from '../widget/filefield'
  import RichText from '../widget/RichText'
  import '../assets/iconfont/index.css'

  const [PHOTO, MARKDOWN] = [true, false]
  export default {
    components: {
      UiButton,
      UiInput,
      UiTextarea,
      Filefield,
      RichText
    },
    methods: {
      handleInput(e) {
        const val = e.target.value
        if (this.loading || !val) {
          return
        }
       
        if (this.mode) {
          this.loading = true
          return this.$store.dispatch('words', val)
          .then(payload => {
            this.loading = false
            this.content = payload.map(({key}) => key).join('')
          })
          .catch(() => {
            this.loading = false
          })
        }
        this.content = val
      },
      handleSubmit() {
        this.$store.dispatch('post', {
          title: this.title,
          type: this.type,
          locked: this.lock,
          content: this.type === 'photo' ? this.imgs.map(({file}) => file) : this.content,
        })
      },
      handleAddImage(e) {
        const file = e.target.files[0]
        this.imgs.push({
          url : URL.createObjectURL(file),
          file : file,
        })
      },
      handleRemoveImage(i) {
        URL.revokeObjectURL(this.imgs[i].url);
        this.imgs.splice(i, 1);
      }
    },
    data(){
      return {
        title: '',
        content: '',
        imgs: [],
        preview: '',
        isPreview : false,
        type: 'markdown',
        mode: false,
        loading: false,
      }
    }
  }
</script>