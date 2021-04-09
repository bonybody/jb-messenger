<template>
  <div class="head">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppMediumHeading",
}
</script>

<style scoped lang="scss">
.head {
  font-size: $medium-font-size;
  font-weight: bold;
}
</style>