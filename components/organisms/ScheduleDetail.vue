<template>
  <div class="schedule">
    <div class="schedule__loading" v-show="title === null">
      <app-loading-icon/>
    </div>
    <app-frame v-show="title !== null">
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
    </app-frame>
  </div>
</template>

<script>


import AppFrame from "@/components/atoms/frames/AppFrame";
import AppHeading from "@/components/atoms/heading/AppHeading";
import AppButton from "@/components/atoms/buttons/AppButton";
import AppLoadingIcon from "@/components/atoms/icons/AppLoadingIcon";
import {defineComponent, reactive, useFetch, computed, useContext, useRouter} from "@nuxtjs/composition-api";


export default defineComponent({
  components: {AppLoadingIcon, AppButton, AppHeading, AppFrame},

  setup(props) {
    const router = useRouter()
    const {$api, $dateHandler, $globalDialog} = useContext()
    const state = reactive({})

    useFetch(async () => {
      const res = await $api['schedule'].getScheduleById(props.id)
      state.title = res.title
      state.text = res.text
      state.datetime = $dateHandler.formatJapanese(res.datetime)
    })

    const onDelete = () => {
      $globalDialog.showDialog('削除します', '本当によろしいですか？',
          async () => {
            await $api['schedule'].deleteSchedule(state.id)
            await router.push('/')
          })
    }

    const getText = () => {
      if (this.property.text === undefined) {
        return ''
      } else {
        return this.property.text.replace(/\n/g, '<br>')
      }
    }


    return {
      title: state.title,
      text: state.text,
      datetime: state.datetime,
      getText,
      onDelete
    }
  },
  props: {
    id: {
      type: String,
      require: true
    }
  },
})
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
