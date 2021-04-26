<template>
  <div class="schedules">
    <div v-show="$fetchState.pending" class="schedules__loading">
      <app-loading-icon></app-loading-icon>
    </div>
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
import AppLoadingIcon from "@/components/atoms/icons/AppLoadingIcon";

export default {
  name: "NewSchedules",
  components: {AppLoadingIcon, SchedulePreview},
  async fetch() {
    try {
      await this.$nextTick(async () => {
        this.$nuxt.$loading.start()
        this.schedules = await this.$api['schedule'].getSchedulesByNew()
        this.$nuxt.$loading.finish()
      })
    } catch (e) {
      console.log(e.message)
    }
  },
  data() {
    return {
      schedules: [],
    }
  },
}
</script>

<style scoped lang="scss">
@import "schedules-mixin";

@include schedules-mixin();

</style>