<template>
<div class="global-loading">
  <div class="loading-animation">
    <div></div>
  </div>
</div>
</template>

<script>
export default {
  name: "TheGlobalLoading"
}
</script>

<style scoped lang="scss">
@include loading-animation();

.global-loading {

}
</style>