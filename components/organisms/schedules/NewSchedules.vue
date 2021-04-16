<template>
  <div class="schedules">
    <template v-for="schedule in schedules">
      <div class="schedules__schedule">
        <schedule-preview
            :id="schedule.id"
            :title="schedule.title"
            :text="schedule.title"
            :datetime="schedule.datetime"
        />
      </div>
    </template>
  </div>
</template>

<script>
import SchedulePreview from "@/components/molecules/schedules/SchedulePreview";

export default {
  name: "NewSchedules",
  components: {SchedulePreview},
  async fetch() {
    try {
      this.schedules = await this.$api['schedule'].getSchedulesByNew()
    } catch (e) {
      console.log(e.message)
    }
  },
  data() {
    return {
      schedules: []
    }
  }
}
</script>

<style scoped lang="scss">
.schedules {
  display: flex;
  flex-flow: column;
  &__schedule {
    margin-bottom: $medium-margin;
  }

}

</style>