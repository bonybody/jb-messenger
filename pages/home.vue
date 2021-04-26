<template>
  <div class="wrap">
    <div class="schedule">
      <new-schedules/>
    </div>
  </div>
</template>

<script>
import NewSchedules from "@/components/organisms/schedulePreviews/NewSchedules";

export default {
  components: {NewSchedules},
  middleware: 'auth'
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