<template>
  <button
      @click="$emit('click')"
      :class="{
      disabled: disabled,
      danger: danger
    }"
      :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
button {
  font-weight: bold;
  border-radius: $border-radius;
  background-color: $primary-color;
  color: $on-font-color;
  font-size: $medium-font-size;
  text-align: center;
  width: 100%;
  padding: $medium-padding;
  box-sizing: border-box;
}
</style>