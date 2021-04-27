<template>
  <div class="home">
    <div class="schedule">
      <div class="schedule__heading">
        <app-heading size="semi-large">スケジュール一覧</app-heading>
      </div>
      <new-schedules/>
    </div>
  </div>
</template>

<script>
import NewSchedules from "@/components/organisms/schedulePreviews/NewSchedules";
import AppHeading from "@/components/atoms/heading/AppHeading";

export default {
  components: {AppHeading, NewSchedules},
  middleware: 'auth'
}
</script>

<style scoped lang="scss">
.form {
  max-width: 400px;
  margin: 0 auto;
}

.schedule {
  margin: 0 auto;
  max-width: 400px;

  &__heading {
    text-align: left;
    margin-bottom: $medium-margin;
  }
}
</style>