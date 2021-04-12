<template>
  <div>
    <div class="wrap">
      <app-text-link :to="'login'">ログイン</app-text-link>
    </div>
    <div class="wrap">
      <app-text-link :to="'sign-up'">新規登録</app-text-link>
    </div>
    <div v-show="$myAuth.loggedIn()">
      <app-button :mini="true">ログイン中</app-button>
    </div>
    <div v-show="!$myAuth.loggedIn()">
      <app-button :mini="true" :second="true">未ログイン</app-button>
    </div>
    <div class="form">
      <schedule-form/>
    </div>
  </div>
</template>

<script>
import AppTextLink from "@/components/atoms/links/AppTextLink";
import AppButton from "@/components/atoms/buttons/AppButton";
import ScheduleForm from "@/components/organisms/forms/ScheduleForm";

export default {
  name: "index",
  components: {ScheduleForm, AppButton, AppTextLink}
}
</script>

<style scoped lang="scss">
.form {
  max-width: 300px;
  margin: 0 auto;
}
</style>