<template>
  <div class="schedule">
    <div class="schedule__heading">
      <app-heading size="semi-large">スケジュール詳細</app-heading>
    </div>
    <div class="schedule__content">
      <schedule-detail :id="$route.params.id"/>
    </div>
  </div>
</template>

<script>
import ScheduleDetail from "@/components/organisms/ScheduleDetail";
import AppHeading from "@/components/atoms/heading/AppHeading";

export default {
  components: {AppHeading, ScheduleDetail}
}
</script>

<style scoped lang="scss">
.schedule {
  max-width: 400px;
  margin: 0 auto;

  &__heading {
    margin-bottom: $medium-margin;
  }
}
</style>