<template>
  <div
      class="head"
      :class="{
    mini: size === 'mini',
    medium: size === 'medium',
    semiLarge: size === 'semi-large',
    large: size === 'large'
      }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppHeading",
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>

<style scoped lang="scss">
.head {
  font-weight: bold;
}

.mini {
  font-size: $mini-font-size;
}
.medium {
  font-size: $medium-font-size;
}
.semiLarge {
  font-size: $semi-large-font-size;
}
.large {
  font-size: $large-font-size;
}
</style>