<template>
  <div v-on:transitionend="transend" v-on:click="clickface" class="modal ui-trans ui" data-ctrl="modal">
    <div class="body">
      <div class="head">
        <slot name="head"></slot>
      </div>
      <section>
        <slot name="section"></slot>
      </section>
      <div class="ft tb cells" v-on:click="close">
        <slot><span class="tc ui">确定</span></slot>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "../less/reuse.less";
  .modal {
    .surface;
    &.active .body {
      -webkit-transform: -webkit-translate(-50%, -50%)!important;
      -ms-transform: -ms-translate(-50%, -50%)!important;
      -o-transform: -o-translate(-50%, -50%)!important;
      transform: translate(-50%, -50%)!important;
    }
    .body {
      top: 50%;
      left: 50%;
    }
  }



  .modal.ui {
    .body {
      width: 85%;
      border-radius: 3px;
      overflow: hidden;
    }
    &.sm .body {
      max-width: 300px;
    }
    &.lg .body {
      width: 85%;
      max-width: 900px;
    }
    @media (min-width: 768px) {
      .body {
        width: 35%;
      }
    }
    .head {
      font-size: 1.125em;
      padding:  1rem 1.25rem 0.5rem;
      font-weight: 800;
      background-color: #fff;   
    }
    section {
      padding:0  1.25rem 1rem;
      color: #888;
      background-color: #fff;
      background-clip: padding-box;
    }
    h5+section {
      padding-top: 0.7rem;
    }
    .ft {
      >* {
        background-color: #fff;
        background-clip: padding-box;
        border-radius: 0;

        border-width:0px;
        border-top: 1px solid transparent;
        &:not(:first-child) {
          border-left: 1px solid transparent;
        }
      }

    }
  }
  .modal.ui-trans {
    .surface.ui-trans;
    .body {
      -webkit-transform: -webkit-translate(-50%, 0);
      -ms-transform: -ms-translate(-50%, 0);
      -o-transform: -o-translate(-50%, 0);
      transform: translate(-50%, 0);
    }
  }
</style>
<script>
  let surfaceProto = {
    show: function() {
      this.style.display = "block";
      this.offsetWidth;
      this.classList.add('active');

    },
    hide: function(e) {
      this.classList.remove('active');
    },
    _onTransEnd: function(e) {
      if (!this.classList.contains('active')) {
        this.style.display = "none";
      }
    },
    _onClickFace: function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    }
  }
  export default {
    ready: function() {
      this.$el.show = surfaceProto.show;
      this.$el.hide = surfaceProto.hide;
    },
    methods: {
      close: function(e) {
        this.$el.hide();
      },
      transend : function(e){
        surfaceProto._onTransEnd.call(e.currentTarget, e);
      },
      clickface : function(e){
       surfaceProto._onClickFace.call(e.currentTarget, e);
     }
   },
   data(){
    return {
      active : false,
    }
   }
 }
</script>
