<template>
  <div class="wrap">
    <div class="schedule">
      <new-schedules/>
    </div>
  </div>
</template>

<script>
import ScheduleForm from "@/components/organisms/forms/ScheduleForm";
import NewSchedules from "@/components/organisms/schedules/NewSchedules";

export default {
  name: "index",
  components: {NewSchedules, ScheduleForm},
}
</script>

<style scoped lang="scss">
.form {
  max-width: 400px;
  margin: 0 auto;
}

.schedule {
  margin: 100px auto;
  max-width: 400px;
}
</style>