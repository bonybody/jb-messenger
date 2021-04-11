<template>
  <button
      @click="$emit('click')"
      :class="{
        'active': active,
        'disabled': disabled,
        'mini': mini,
        'auto': !mini
    }"
      :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppToggleButton",
  props: {
    active: {
      type: Boolean,
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    second: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    to: {
      type: String | Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
button, a {
  display: inline-block;
  font-weight: bold;
  border-radius: $border-radius;
  background-color: $primary-color;
  color: $on-font-color;
  font-size: $medium-font-size;
  text-align: center;
  padding: $medium-padding;
  box-sizing: border-box;
}

.active {
  color: $primary-color;
  border: 1px solid $primary-color;
  background-color: $main-background-color;
  transition: 0.3s all;
}

.auto {
  width: 100%;
}

.mini {
  min-width: 100px;
}


</style>