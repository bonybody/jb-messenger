<template>
  <div class="schedule">
    <schedule-details :id="$route.params.id" />
  </div>
</template>

<script>
import ScheduleDetails from "@/components/organisms/ScheduleDetails";
export default {
  components: {ScheduleDetails}
}
</script>

<style scoped>

</style>