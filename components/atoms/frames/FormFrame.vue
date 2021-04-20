<template>
<div class="wrap">
  <slot></slot>
</div>
</template>

<script>
export default {
name: "FormFrame"
}
</script>

<style scoped lang="scss">
.wrap {
  background-color: $main-background-color;
  border-radius: $border-radius;
  border: 1px solid $shadow-color;
  box-sizing: border-box;
  padding: $medium-padding;
}
</style>