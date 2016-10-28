<template>
  <shade :shown="shown" @close="$emit('close')">
    <component :is="tag" v-if="shown" class="modal">
      <div v-if="$slots.head" class="modal-head">
        <slot name="head">model-head</slot>
      </div>
      <section class="modal-section">
        <slot>model-section</slot>
      </section>
      <div class="modal-actions" @click.stop="$emit('close')">
        <slot name="actions"><ui-button>确定</ui-button></slot>
      </div>
    </component>
  </shade>
</template>
<style>
  .shade {
    &-enter {
      &&-active .modal {
        transform: translate(-50%, 0);
      }
      &-active .modal {
        transform: translate(-50%, -50%);
        transition: transform 300ms;
      }
    }

    &-leave {
      &&-active .modal {
        transform: translate(-50%, -50%);
      }

      &-active .modal {
        transform: translate(-50%, 0);
        transition: transform 300ms;
      }
    }
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 640px;
    border-radius: 3px;
    overflow: hidden;

    &-head {
      font-size: 1.125em;
      padding:  1rem 1.25rem 0.5rem;
      font-weight: 600;

      + .modal-section {
        padding-top: 0.7rem;
      }
    }

    &-section {
      margin-top: 1px;
      padding: 1rem  1.25rem;
      color: #888;
      background-color: #fff;
    }

    &-actions {
      display: flex;
      margin-top: 1px;
      
      >* {
        flex: 1;
        border-radius: 0;
        border: 0;
        background: #fff;

        &:not(:first-child) {
          margin-left: 1px;
        }
      }
    }

    &-small {
      max-width: 300px;
    }

    &-large {
      width: 85%;
      max-width: 900px;
    }

    @media (min-width: 768px) {
      .body {
        width: 35%;
      }
    }
  }

</style>
<script>
  import Shade from './Shade'
  import UiButton from './UiButton'
  const VALID_TAGS = ['form', 'div']

  export default {
    props: {
      shown: {
        type: Boolean
      },
      tag: {
        type: String,
        validator: val => VALID_TAGS.includes(val),
        default: 'div'
      }
    },
    components: {
      Shade,
      UiButton,
    }
  }
</script>
