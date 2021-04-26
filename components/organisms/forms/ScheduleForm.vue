<template>
  <div class="form">
    <form-frame>
      <div class="form__line form__line--heading">
        <app-heading :size="'semi-large'">スケジュール登録</app-heading>
      </div>
      <div class="form__section">
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
        </div>
      </div>
      <form class="form__section" @submit.prevent="post">
        <div class="form__line">
          <normal-form-section v-model="title" :type="'text'" :name="'title'">
            <template v-slot:label>タイトル</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="datetime" :type="'datetime-local'" name="datetime">
            <template v-slot:label>日時 <span style="font-size: 0.8em">約5分前に通知されます。</span></template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="text" :type="'textarea'" name="text">
            <template v-slot:label>概要</template>
          </normal-form-section>
        </div>
        <div class="form__line--button">
          <app-button type="submit" @submit.prevent="post" :disabled="disabled">送信</app-button>
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
      text: '',
      disabled: false
    }
  },
  methods: {
    post: async function () {
      this.disabled = true
      const res = await this.$api['schedule'].postSchedule(
          this.title,
          this.text,
          this.$dateHandler.toDate(this.datetime)
      )
      console.log(res)
      await this.$router.push('schedule/' + res)
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
@import "form-mixin";

@include form;

</style>