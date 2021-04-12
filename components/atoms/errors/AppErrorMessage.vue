<template>
  <span><slot></slot></span>
</template>

<script>
export default {
name: "AppErrorMessage"
}
</script>

<style scoped lang="scss">
span {
  color: $danger-color;
}
</style>