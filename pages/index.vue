<template>
  <div>
    <div class="wrap">
      <app-text-link :to="'login'">ログイン</app-text-link>
    </div>
    <div class="wrap">
      <app-text-link :to="'sign-up'">新規登録</app-text-link>
    </div>
  </div>
</template>

<script>
import AppTextLink from "@/components/atoms/links/AppTextLink";

export default {
  name: "index",
  components: {AppTextLink}
}
</script>

<style scoped>

</style>