<template>
  <div class="wrap">
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
  max-width: 400px;
  margin: 0 auto;
}
</style>