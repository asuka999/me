<template>
  <input
    class="textfield"
    :value="value"
    :name="name"
    :type="type"
    :placeholder="placeholder" />
</template>
<style>
  .textfield {
    &,
    &[type="text"],
    &[type="url"],
    &[type="email"],
    &[type="number"],
    &[type="password"],
    &[type="search"] {
      width: 100%;
      padding: 0.625rem  0.9375rem;
      box-sizing: border-box;
      border:0;
      outline: 0;
    }
  }

</style>
<script>
  //  //  [contenteditable]
  const TYPES = ['text', 'url', 'email', 'number', 'password', 'search', 'textarea']
  export default {
    props: {
      type: {
        type: String,
        validator: val => TYPES.includes(val),
        default: 'text'
      },
      placeholder: {
        type: String
      },
      value: {
        type: String
      },
      name: {
        type: String,
      }
    },
    data() {
      return {
        tag: this.type === 'textarea' ? 'textarea' : 'input'
      }
    }
  }

</script>