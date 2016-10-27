<template>
  <textarea
    class="textfield"
    :placeholder="placeholder"
    :value="value"
  />
</template>
<style>
</style>
<script>
  export default {
    props: {
      placeholder: {
        type: String
      },
      value: {
        type: String
      },
      onChange: {
        require: true,
      }
    },
  }
</script>