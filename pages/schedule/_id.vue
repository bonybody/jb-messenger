<template>
  <div class="schedule">
    <div class="schedule__heading">
      <app-heading size="semi-large">スケジュール詳細</app-heading>
    </div>
    <div class="schedule__content">
      <schedule-details :id="$route.params.id"/>
    </div>
  </div>
</template>

<script>
import ScheduleDetails from "@/components/organisms/ScheduleDetails";
import AppHeading from "@/components/atoms/heading/AppHeading";

export default {
  components: {AppHeading, ScheduleDetails}
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