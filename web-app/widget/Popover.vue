<template>
  <transition
    v-if="shown"
    name="popover"
    mode="out-in"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    :css="false"
  >
    <div v-if="shown" class="popover"><slot /></div>
  </transition>
</template>
<style>
  .popover {
    position: absolute;

    &-leave {
      opacity: 1;
      transform: translateY(0);

      &-active {
        opacity: 0;
        transition: transform .3s, opacity .3s
      }
    }

    &-bottom {
      top: 100%;
      transform: translateY(30%);
    }

    &-top {
      bottom: 100%;
      transform: translateY(-30%);
    }

    &-enter {
      opacity: 0;

      &-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform .3s, opacity .3s
      }
    }
  }


</style>
<script>
  const TOP = 'top'
  const BOTTOM = 'bottom'
  const CLASS = 'popover'
  const TIMEOUT = 300
  export default {
    props:['shown'],
    methods: {
      beforeEnter(el) {
        el.classList.add(`${CLASS}-enter`)
      },
      enter(el, done) {
        const {top, left, width, height} = this.$parent.$el.getBoundingClientRect()
        const {innerHeight} = window
        const centerX = left + width / 2
        const {offsetWidth, offsetHeight}= el
        const mayPoint = {
          bottom: top + height + offsetHeight,
          left: centerX - offsetWidth / 2
        }
        this.from = mayPoint.bottom > innerHeight ? TOP : BOTTOM
        el.classList.add(`${CLASS}-${this.from}`)
        el.style.left = (width - offsetWidth) / 2 - (mayPoint.left < 0 ? mayPoint.left : 0)
        el.offsetWidth
        el.classList.add(`${CLASS}-enter-active`)
        el.classList.remove(`${CLASS}-${this.from}`)
        setTimeout(done, TIMEOUT)
      },
      afterEnter(el) {
        el.classList.remove(`${CLASS}-enter`, `${CLASS}-enter-active`)
      },
      beforeLeave(el) {
        el.classList.add(`${CLASS}-leave`)
      },
      leave(el, done) {
        el.classList.add(`${CLASS}-leave-active`, `${CLASS}-${this.from}`)
        setTimeout(done, TIMEOUT)
      },
      afterLeave(el) {
        el.classList.remove(`${CLASS}-leave`, `${CLASS}-leave-active`, `${CLASS}-${this.from}`)
      }
    },
    data() {
      return {from: null}
    }
  }
</script>