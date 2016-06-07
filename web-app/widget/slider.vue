<template>
  <div class="slider ui ui-trans"
  v-on:mouseover="pause(true)"
  v-on:mouseout="pause()" >
  <ul class="slider-list" v-el:list>
    <slot>
      <li v-for="img of imgs" track-by="$index">
        <img v-bind:src="img" alt="img">
      </li>
    </slot>
    </ul>
    <div class="slider-ctrls">
      <span class="slider-ctrl-left" v-on:click="to('left')"><i class="ui ic-chevron-left lg"></i></span>
      <span class="slider-ctrl-right" v-on:click="to('right')"><i class="ui ic-chevron-right lg"></i></span>
      <ul class="slider-indicators" v-el:indicators v-on:click="_handleIndicator">
        <li v-for="img of imgs" track-by="$index" v-bind:class="{active : $index==index}" ></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
  @import '../less/style.less';
  .slider {
    position: relative;
    .slider-ctrl-left, .slider-ctrl-right{
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
    .slider-ctrl-left{
      left: 0%;
    }
    .slider-ctrl-right{
      right: 0%;
    }
  }

  .slider-indicators {
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    list-style: none;
    position: absolute;
    bottom: 0.625rem;
    text-align: center;
    width: 100%;
  }
  .slider-list{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    display: inline-block;
    overflow: hidden;
    position: relative;
    > li {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      max-height: 36rem;
      &.active {
        position: static;
        display: block;
      }
    }
  }

  .slider.ui {
    min-height: 10rem;
    .slider-list , .slider-list li, .slider-list img{
      width:100%;
    }

    .slider-ctrl-left, .slider-ctrl-right{
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(255, 255, 255, 0.64);
      height : @ui-lg;
      width : @ui-md;
      line-height: @ui-lg;
      text-align: center;
      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        color: rgba(255, 255, 255, 0.72);
      }
    }
    .slider-ctrl-left{
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    .slider-ctrl-right {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .slider-indicators {
      font-size: 0;
      li {
        display: inline-block;
        width: 8px;
        height: 8px;
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 3px;
        padding: 2px;
        &:not(:first-child){
          margin-left :  0.25rem;
        }
        &.active:after {
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


  .slider.ui-trans .slider-list > li {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    &.left {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      display: block;
      position: absolute;
    }
    &.right {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      display: block;
      position: absolute;
    }
  }

</style>
<script>


    //static 
    let arr = {
        left: ['right', 'left'], //<-
        right: ['left', 'right'] //->
      },
      TRANSTIME = 600,
      CYCLETIME = 5000 ;

      export default {
        props : ['on', 'imgs'],
        methods :{
          cycle(time, direction) {
            let target = this;
            target.cycleTime = time || target.cycleTime;
            target.direction = direction || target.direction;
            target.interval = setInterval(function() {
              if (this.sliding) return;
              target.to(target.direction);
            }, target.cycleTime);
          },
          pause(isPaused) {
            if(isPaused){
             // this.on = false 
              this.interval = clearInterval(this.interval);
            }else{
             // this.on = true; 
              this.on && this.cycle();
            }
          },
          to(direction){
            if (this.sliding) return;
                // this.$el.querySelector('ul.slider-list .active');
                console.log('to', this.$els.list.children.length)
                if(this.index == direction || this.$els.list.children.length <=1)  return;
                let next, cur = this.$els.list.children[this.index];

                if (typeof direction === "number") {
                  var nextI =  direction;
                  direction = this.index < nextI ? 'right' : 'left';
                  this.index = nextI;
                  next = cur.parentElement.children[nextI];
                } else {
                  if (direction === 'left') {
                    if(this.index==0){
                      this.index = this.imgs.length-1;
                      next = cur.parentElement.lastElementChild;
                    }else{
                      this.index--;
                      next = cur.previousElementSibling;
                    }
                  } else {
                    if(this.index==this.imgs.length-1){
                      this.index = 0;
                      next = cur.parentElement.firstElementChild
                    }else{
                      this.index++;
                      next = cur.nextElementSibling 
                    }
                  }
                }
                next.classList.add(arr[direction][1]);
                next.offsetWidth;
                next.classList.add('active');
                next.classList.remove(arr[direction][1]);
                cur.classList.remove('active');
                cur.classList.add(arr[direction][0]);
                this.sliding = cur;
              },
              _handleTransEnd(e){
                if (this.sliding === e.target) {
                  e.target.classList.remove('left') 
                  e.target.classList.remove('right') 
                  this.sliding = null;
                }
              },
              _handleIndicator(e){
                if (e.target === this) return;
                this.to(Array.prototype.indexOf.call(e.target.parentElement.children, e.target));
              }
            },
            ready(){
              var list = this.$els.list;
              if( list.children.length>0){
                !this.imgs && (this.imgs = new Array(list.children.length));
                this.pause(!this.on);
                list.children[this.index].classList.add('active');
                for(var i = 0; i< list.children.length; i++){
                  list.children[i].addEventListener('transitionend', this._handleTransEnd);
                }
              }else{
                this.on = false
              }
              
            },
            data(){
              return {
                cur : null, 
                sliding : null, 
                cycleTime : 5000,
                direction: 'right',
                interval : undefined,
                index : 0,
              }
            },
            beforeDestroy(){
              clearInterval(this.interval);
            }
          }
        </script>