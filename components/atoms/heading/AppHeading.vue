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
  font-weight: $mini-font-size;
}
.medium {
  font-weight: $medium-font-size;
}
.semiLarge {
  font-weight: $semi-large-font-size;
}
.large {
  font-weight: $large-font-size;
}
</style>