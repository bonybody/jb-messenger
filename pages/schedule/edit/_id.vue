<template>
  <div class="edit">
    <schedule-form :id="$route.params.id" />
  </div>
</template>

<script>
import ScheduleForm from "@/components/organisms/forms/ScheduleForm";
export default {
  components: {ScheduleForm}
}
</script>

<style scoped lang="scss">
.edit {
  max-width: 400px;
  margin: 0 auto;
}
</style>