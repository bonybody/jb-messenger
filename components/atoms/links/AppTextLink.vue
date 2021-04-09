<template>
  <nuxt-link class="link" :to="to"><slot></slot></nuxt-link>
</template>

<script>
export default {
  name: "AppTextLink",
  props: {
    to: {
      type: Object | String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  color: $primary-color;
  font-weight: bold;
  border-bottom: 2px solid $primary-color;
}
</style>