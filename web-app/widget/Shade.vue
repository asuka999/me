<style>
  .shade {
    &:before {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.24);
    }

    /*
    for s vue the transition rules
    &-enter {
      opacity: 0;
      transition: opacity 1000ms ease-in-out;

      &-active {
        opacity: 1;
      }
    }
    */

    &-enter {
      &-active {
        opacity: 1;
        transition: opacity 300ms ease-in-out;
      }
      &&-active{
        opacity: 0;
      }
    }


    &-leave {
      &&-active {
        opacity: 1;
      }

      &-active {
        opacity: 0;
        transition: opacity 300ms ease-in-out;
      }
    }
  }

</style>
<template>
  <transition
    v-if="shown"
    name="shade"
  >
    <div v-if="shown" class="shade" @click="handleClick">
      <slot />
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      shown: {
        type: Boolean,
        default: false,
      },
      onHide: {
        type: Function
      }
    },
    methods: {
      handleClick(e){
        if (e.target === e.currentTarget) {
          this.$emit('close')
        }
      }
    }
  }
</script>
