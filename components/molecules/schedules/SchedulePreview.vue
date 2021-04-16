<template>
  <form-frame>
    <section class="schedule">
      <div class="schedule__info">
        <div class="schedule__date">{{ getDate }}</div>
        <div class="schedule__title">
          <app-heading size="semi-large"><h3>{{ title }}</h3></app-heading>
        </div>
      </div>
      <div class="schedule__link">
        <app-button :mini="true">詳細</app-button>
      </div>
    </section>
  </form-frame>
</template>

<script>
import FormFrame from "@/components/atoms/frames/FormFrame";
import AppButton from "@/components/atoms/buttons/AppButton";
import AppHeading from "@/components/atoms/heading/AppHeading";
import dateFormat from "@/functions/date-format"

export default {
  name: "SchedulePreview",
  components: {AppHeading, AppButton, FormFrame},
  props: {
    title: {
      type: String,
      require: true
    },
    text: {
      type: String,
      require: true
    },
    datetime: {
      type: Object,
      require: true
    },
  },
  computed: {
    getDate() {
      const myDate = dateFormat(this.datetime.seconds)
      return myDate
    }
  }
}
</script>

<style scoped lang="scss">
.schedule {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__info {
    margin-right: $mini-margin;
    word-break: break-all;

  }
  &__date {
    font-size: $mini-font-size;
    color: $primary-color;
    font-weight: bold;
    margin-bottom: $mini-margin;
  }
  &__title {
  }
}
</style>