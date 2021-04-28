<template>
  <app-frame>
    <section class="schedule">
      <div class="schedule__info">
        <div class="schedule__date">{{ getDate }}</div>
        <div class="schedule__title">
          <app-heading size="semi-large"><h3>{{ title }}</h3></app-heading>
        </div>
      </div>
      <div class="schedule__link">
        <app-button :mini="true" :to="'schedule/' + id">詳細</app-button>
      </div>
    </section>
  </app-frame>
</template>

<script>
import AppFrame from "@/components/atoms/frames/AppFrame";
import AppButton from "@/components/atoms/buttons/AppButton";
import AppHeading from "@/components/atoms/heading/AppHeading";

export default {
  name: "SchedulePreview",
  components: {AppHeading, AppButton, AppFrame},
  props: {
    id: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    text: {
      type: String,
      require: true
    },
    datetime: {
      type: Date,
      require: true
    },
  },
  computed: {
    getDate() {
      return  this.$dateHandler.formatJapanese(this.datetime)
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