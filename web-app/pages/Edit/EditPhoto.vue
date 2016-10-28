<style>
  .edit-photo {
    &-item, &-addfile {
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

    &-item {
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
  <div class="edit-photo">
    <div class="edit-photo-content">
      <div class="edit-photo-item" v-for="(img, index) in imgs">
        <ui-button
          class="edit-photo-item-remove"
          @click.native="handleRemoveImage(index)"
        >
        <i class="icon-cross" />
      </ui-button>
      <div
        class="edit-photo-item-img"
        :style="{ 'background-image' : 'url(' + img.url+ ')' }"
      />
    </div>
    <div class="edit-photo-addfile">
      <filefield v-on:change.native="handleAddImage">
        <i class="icon-plus" />
      </filefield>
    </div>
  </div>
</template>
<script>
  import UiButton from '../../widget/UiButton'
  import Filefield from '../../widget/Filefield'

  export default {
    props: ['onInput'],
    components: {
      UiButton,
      Filefield,
    },
    methods: {
      handleAddImage(e) {
        const file = e.target.files[0]
        if (!file) {
          return
        }
        this.imgs.push({
          url: URL.createObjectURL(file),
          file
        })
        this.onInput(this.imgs.map(({file}) => file))
      },
      handleRemoveImage(i) {
        URL.revokeObjectURL(this.imgs[i].url)
        this.imgs.splice(i, 1)
        this.onInput(this.imgs.map(({file}) => file))
      }
    },
    data() {
      return {
        imgs: [],
      }
    }
  }
</script>