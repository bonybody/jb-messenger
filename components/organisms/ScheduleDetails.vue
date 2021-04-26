<template>
  <div class="schedule">
    <form-frame>
      <div class="schedule__section">
        <div class="schedule__label">
          <app-heading size="semi-large">タイトル</app-heading>
        </div>
        <div class="schedule__content">
          {{ title }}
        </div>
      </div>
      <div class="schedule__section">
        <div class="schedule__label">
          <app-heading size="semi-large">
            日時 <span style="font-size: 0.8em">約5分前に通知されます。</span>
          </app-heading>
        </div>
        <div class="schedule__content">
          {{ datetime }}
        </div>
      </div>
      <div class="schedule__section">
        <div class="schedule__label">
          <app-heading size="semi-large">
            概要
          </app-heading>
        </div>
        <div class="schedule__content"
             v-html="$sanitize(text.replace(/\n/g, '<br>'))">
        </div>
      </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from "@/components/atoms/frames/FormFrame";
import AppHeading from "@/components/atoms/heading/AppHeading";

export default {
  name: "ScheduleDetails",
  components: {AppHeading, FormFrame},
  async fetch() {
    const res = await this.$api['schedule'].getScheduleById(this.id)
    this.title = res.title
    this.text = res.text
    this.datetime = this.$dateHandler.formatJapanese(res.datetime)
  },
  props: {
    id: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      title: '',
      text: '',
      datetime: ''
    }
  }
}
</script>

<style scoped lang="scss">
.schedule {
  max-width: 400px;
  margin: 0 auto;

  &__section {
    margin-bottom: $semi-large-margin;
  }

  &__label {
    margin-bottom: $medium-margin;
  }

  &__content {
  }
}
</style>