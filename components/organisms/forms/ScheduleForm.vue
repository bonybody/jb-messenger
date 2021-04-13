<template>
  <div class="wrap">
    <form-frame>
      <div class="wrap__heading">
        <app-heading :size="'semi-large'">スケジュール登録</app-heading>
      </div>
      <form class="form" @submit.prevent="post">
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
        </div>
        <div class="form__line">
          <normal-form-section v-model="title" :type="'text'" :name="'title'">
            <template v-slot:label>タイトル</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="datetime" :type="'datetime-local'" name="datetime">
            <template v-slot:label>日時</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="text" :type="'textarea'" name="text">
            <template v-slot:label>概要</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <app-button type="submit" @submit.prevent="post">送信</app-button>
        </div>
      </form>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from "@/components/atoms/frames/FormFrame";
import AppHeading from "@/components/atoms/heading/AppHeading";
import AppErrorMessage from "@/components/atoms/errors/AppErrorMessage";
import NormalFormSection from "@/components/molecules/forms/NormalFormSection";
import AppButton from "@/components/atoms/buttons/AppButton";

export default {
  name: "ScheduleForm",
  components: {AppButton, NormalFormSection, AppErrorMessage, AppHeading, FormFrame},
  data() {
    return {
      err: '',
      datetime: nowDate(),
      title: '',
      text: ''
    }
  },
  methods: {
    post: function () {
      console.log(this.date)
    }
  }
}

const nowDate = () => {
  const today = new Date()
  today.setDate(today.getDate() + 1)
  const yyyy = today.getFullYear()
  const mm = ('0' + (today.getMonth() + 1)).slice(-2)
  const dd = ('0' + today.getDate()).slice(-2)
  return `${yyyy}-${mm}-${dd}T00:00`
}
</script>

<style scoped lang="scss">
.wrap {
  &__heading {
    margin-bottom: $semi-large-margin;
  }
}

.form {
  &__line {
    margin-bottom: $semi-large-margin;
  }
}
</style>