<template>
  <div
    class="slider"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
      <div :key="item" class="slider-inner">
        <img :src="item" alt="img" />
      </div>
    </transition>
    <div class="slider-ctrls">
      <ui-button
        class="slider-ctrl-left"
        @click.stop.native="go('left')"
      >
        <i class="icon-left" />
      </ui-button>
      <ui-button
        class="slider-ctrl-right"
        @click.stop.native="go('right')"
      >
        <i class="icon-right" />
      </ui-button>
      <ul class="slider-indicators">
        <li
          v-for="(item, index) of items"
          :class="{'is-active': current===index}"
          @click.stop="go(index)"
        />
      </ul>
    </div>
  </div>
</template>
<style>

  .slider {
    position: relative;
  
    &-leave {
      transform: translate3d(0, 0, 0);

      &-active {
        transition: all .6s ease-in-out;
      }
    }

    &-left {
      transform: translate3d(-100%, 0, 0);
    }

    &-right {
      transform: translate3d(100%, 0, 0);
    }

    &-enter {
      position: absolute;
      top: 0;

      &-active {
        transform: translate3d(0, 0, 0);
        transition: all .6s;
      }
    }

    &-ctrl {
      &-left, &-right {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }

      &-left{
        left: 0%;
      }

      &-right{
        right: 0%;
      }
    }

    &-indicators {
      padding-left: 0;
      margin-bottom: 0;
      margin-top: 0;
      list-style: none;
      position: absolute;
      bottom: 0.625rem;
      text-align: center;
      width: 100%;
    }
    
    // ui
    min-height: 10rem;

    &-inner {

      &, img {
        width:100%;
        height: 100%;
      }

      img {
        object-fit: cover;
      }
    }

    &-ctrl {
      &-left, &-right{
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(255, 255, 255, 0.64);
        padding: 20px 10px;
        text-align: center;
        &:hover {
          background-color: rgba(0, 0, 0, 0.3);
          color: rgba(255, 255, 255, 0.72);
          transition: background-color .3s, color .3s;
        }
      }

      &-left{
        border-radius: 0 6px 6px 0;
      }

      &-right {
        border-radius: 6px 0 0 6px;
      }
    }

    &-indicators {
      font-size: 0;

      li {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 3px;
        padding: 2px;

        &:not(:first-child){
          margin-left: 0.25rem;
        }

        &.is-active:after {
          width: 100%;
          height: 100%;
          display: block;
          content: '';
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
        }
      }
    }
  }
</style>
<script>
  import UiButton from './UiButton'
  const TRANSTIME = 600
  const CYCLETIME = 5000
  const ENTER_DIRECTION = {
    left: 'right', // <-
    right: 'left' // ->
  }
  export default {
    props: {
      on: {
        type: Boolean,
        default: true,
      },
      direction: {
        type: String,
        validator: (val) => Object.keys(ENTER_DIRECTION).includes(val),
        default: 'left',
      },
      items: {
        type: Array,
      },
      cycleTime: {
        type: Number,
        default: CYCLETIME
      }
    },
    components: {
      UiButton,
    },
    computed: {
      item() {
        return this.items[this.current]
      }
    },
    methods: {
      beforeEnter(el) {
        el.classList.add('slider-enter')
        this.currentDirection = this.slideTo
        el.classList.add(`slider-${ENTER_DIRECTION[this.currentDirection]}`)
      },
      enter(el, done) {
        el.offsetWidth
        el.classList.add('slider-enter-active')
        setTimeout(done, TRANSTIME)
      },
      afterEnter(el) {
        el.classList.remove('slider-enter', 'slider-enter-active', `slider-${ENTER_DIRECTION[this.currentDirection]}`)
      },
      beforeLeave(el) {
        el.classList.add('slider-leave')
      },
      leave(el, done) {
        el.classList.add('slider-leave-active', `slider-${this.currentDirection}`)
        setTimeout(done, TRANSTIME)
      },
      afterLeave(el) {
        el.classList.remove('slider-leave', 'slider-leave-active')
      },
      play() {
        this.pause()
        this.interval = setInterval(this.to.bind(this), this.cycleTime)
      },
      pause() {
        if (this.interval) {
          clearInterval(this.interval)
        }
        this.interval = null
      },
      to(direction) {
        if (typeof direction === 'number') {
          if (this.current === direction) {
            return
          }
          this.slideTo = this.current < direction ? 'left' : 'right'
          this.current = direction
        } else {
          if (direction) {
             this.slideTo = direction
          }
          this.current = this.slideTo === 'left' ? 
            (this.current >= (this.items.length - 1) ? 0 : this.current + 1) :
            (this.current <= 0 ? (this.items.length - 1) : this.current - 1)
        }
      },
      go(...args) {
        this.pause()
        const direction = this.slideTo
        this.to(...args)
        setTimeout(() => {
          this.play.bind(this)
          this.slideTo = direction
        }, TRANSTIME)
      },
      handleMouseEnter() {
        this.pause()
      },
      handleMouseLeave() {
        this.on && this.play()
      }
    },
    mounted(){
      this.on && this.play()
    },
    data(){
      return {
        current: 0,
        interval: null,
        slideTo: this.direction,
        currentDirection: null,
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },
  }
</script>