<template>
    <button
        v-if="!Boolean(to)"
        :type="type"
        @click="$emit('click')"
        :class="{
      disabled: disabled,
      danger: danger,
      second: second,
      mini: mini,
      auto: !mini
    }"
        :disabled="disabled">
      <slot></slot>
    </button>
    <nuxt-link
        v-else
        :to="to"
        :class="{
      disabled: disabled,
      danger: danger,
      second: second,
      mini: mini,
      auto: !mini
    }"
        :disabled="disabled">
      <slot></slot>
    </nuxt-link>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: 'button'
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

.auto {
  width: 100%;
}

.mini {
  min-width: 100px;
}

.second {
  color: $primary-color;
  border: 1px solid $primary-color;
  background-color: $main-background-color;
}
</style>