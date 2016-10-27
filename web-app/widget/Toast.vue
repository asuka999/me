<template>
  <transition v-if="shown" name="toast">
    <div class="toast" v-if="shown">
      <slot />
    </div>
  </transition>
</template>
<style>

  .toast {
    position: fixed;
    width: 7.6rem;
    min-height: 2.7rem;
    text-align: center;
    color: #fff;
    padding: 0.625rem 0.75rem;
    border-radius: 3px;
    box-sizing: border-box;
    background: rgba(40, 40, 40, 0.75);
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate3d(-50%, -50%, 0);

    
    &-top {
      top: 12%;
    }

    &.bottom {
        top: auto;
        bottom: 12%;
    }

    &-left {
      left: 0;
      transform: translateY(-50%);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &-right {
      left: auto;
      right: 0;
      transform: translateY(-50%);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
   }


    &-enter {
      &&-active {
        opacity: 0;
        .toast-bottom {
          transform: translate3d(-50%, 50%, 0);
        }

        .toast-top {
          transform: translate3d(-50%, -100%, 0);
        }

        .toast-right {
          transform: translate3d(100%, 50%, 0);
        }

        .toast-left {
          transform: translate3d(-100%, 50%, 0);
        }
      }
      &-active {
        opacity: 1;
        transition: transform, opacity 300ms ease-in-out;
      }
    }

    &-leave {
      &&-active {
        
      }
      &-active {

      }
    }
  }

</style>
<script>
  export default {
    props: {
      shown: {
        type: Boolean,
      },
      left: {
        type: [Number, Boolean],
        default: false,
      },
      right: {
        type: [Number, Boolean],
        default: false,
      },
      top: {
        type: [Number, Boolean],
        default: false,
      },
      bottom: {
        type: [Number, Boolean],
        default: true,
      },
    }
  }
</script>