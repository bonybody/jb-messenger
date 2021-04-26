<template>
  <div class="loading-animation">
    <div></div>
  </div>
</template>

<script>
export default {
name: "AppLoadingIcon"
}
</script>

<style scoped lang="scss">
@include loading-animation();
.loading-animation {
  display: inline-block;
}
</style>