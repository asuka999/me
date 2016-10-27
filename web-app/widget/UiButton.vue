<template>
  <button
    class="btn"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
<style>
  .btn {
    padding: 0 .75rem;
    min-height: 2.625rem;
    line-height: 2.625rem;
    text-align: center;
    outline: 0;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;

    &-sm{
      font-size : 0.875em;
      line-height: 1.875rem;
    }
    
    &-lg{
      line-height: 4rem - 2px;
    }

    &-s:active {
      -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }
  }
</style>
<script>
  const validTypes = ['button', 'submit', 'image']
  export default {
    props: {
      type: {
        type: String,
        validator: (val) => validTypes.includes(val),
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>