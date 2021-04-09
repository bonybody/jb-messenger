<template>
  <div>
    <div class="header">
      <the-header/>
    </div>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>
<script>
import TheHeader from "@/components/organisms/common/TheHeader";

export default {
  components: {TheHeader}
}
</script>
<style scoped lang="scss">
.header {
  margin-bottom: $large-margin;
}
</style>
