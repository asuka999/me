<template>
  <span class="filefield">
    <input type="file" :accept="accept" />
    <slot />
  </span>
</template>
<style>
  
  .filefield {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;

    [type="file"]{
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      top:0;
      left:0;
      overflow: hidden;

      &::-webkit-file-upload-button{
        cursor:pointer;
      }
    }
  }
</style>
<script>
  export default {
    props: {
      accept: {
        default: 'image/*'
      }
    }
  }
</script>