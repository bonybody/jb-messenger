<template>
  <div class="schedule">
    <div class="schedule__loading" v-show="title === null">
      <app-loading-icon/>
    </div>
    <form-frame v-show="title !== null">
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
               v-html="$sanitize(getText)">
          </div>
        </div>
        <div class="schedule__section schedule__section--multi-column">
          <app-button :to="'/schedule/edit/' + this.id" :mini="true">編集</app-button>
          <app-button @click="onDelete" :mini="true" :danger="true">削除</app-button>
        </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from "@/components/atoms/frames/FormFrame";
import AppHeading from "@/components/atoms/heading/AppHeading";
import AppButton from "@/components/atoms/buttons/AppButton";
import AppLoadingIcon from "@/components/atoms/icons/AppLoadingIcon";

export default {
  name: "ScheduleDetails",
  components: {AppLoadingIcon, AppButton, AppHeading, FormFrame},
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
      title: null,
      text: null,
      datetime: null
    }
  },
  methods: {
    onDelete: async function () {
      await this.$api['schedule'].deleteSchedule(this.id)
      await this.$router.push('/')
    }
  },
  computed: {
    getText() {
      if(this.text === null) {
        return null
      } else {
        return this.text.replace(/\n/g, '<br>')
      }

    }
  }
}
</script>

<style scoped lang="scss">
.schedule {

  &__loading {
    text-align: center;
  }

  &__section {
    margin-bottom: $semi-large-margin;

    &--multi-column {
      display: flex;
      justify-content: flex-end;

      *:not(:first-child) {
        margin-left: $medium-margin;
      }
    }
  }

  &__label {
    margin-bottom: $medium-margin;
  }
}
</style>