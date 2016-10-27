<template>
  <form action="javascript:;">
    <div>
      <ui-input
        name="username"
        placeholder="username"
        @input.native="username = $event.target.value"
      />
    </div>
    <div>
      <ui-input
        type="password"
        name="password"
        placeholder="password"
        @input.native="password = $event.target.value"
      />
    </div>
    <ui-button
      type="submit"
      :disabled="!valid"
      @click.native="handleSubmit"
    >
      确定
    </ui-button>
  </form> 
</template>

<script>
  import UiButton from '../widget/UiButton'
  import UiInput from '../widget/UiInput'
  export default {
    components: {
      UiButton,
      UiInput,
    },
    computed: {
      valid() {
        return this.password && this.username
      }
    },
    methods : {
      handleSubmit() {
        const {password, username} = this
        this.$store.dispatch('login', {
          password,
          username
        })
      }
    },
    data(){
      return {
        username: '',
        password: '',
      }
    }
  }
</script>