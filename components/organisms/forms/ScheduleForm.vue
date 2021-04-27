<template>
  <div class="form">
    <form-frame>
      <div class="form__line form__line--heading">
        <app-heading :size="'semi-large'">スケジュール管理</app-heading>
      </div>
      <div class="form__section">
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
        </div>
      </div>
      <form class="form__section" @submit.prevent="send">
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
          <app-button type="submit" :disabled="disabled">送信</app-button>
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
  async fetch() {
    if (this.id !== null) {
      const data = await this.$api['schedule'].getScheduleById(this.id)
      this.title = data.title
      this.text = data.text
      this.datetime = this.$dateHandler.toDateTimeLocal(data.datetime)
    } else {
      this.datetime = this.$dateHandler.toDateTimeLocal(new Date())
    }
  },
  props: {
    id: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      err: '',
      datetime: '',
      title: '',
      text: '',
      disabled: false
    }
  },
  methods: {
    send: async function () {
      this.disabled = true
      let id = null
      if (this.id !== null) {
        id = await this.edit()
      } else {
        id = await this.post()
      }
      this.disabled = false
      if (id) {
        await this.$router.push('/schedule/' + id)
        this.$emit('success')
      }
    },

    post: async function () {
      return await this.$api['schedule'].postSchedule(
          this.title,
          this.text,
          this.$dateHandler.toDate(this.datetime)
      )
    },

    edit: async function () {
      return await this.$api['schedule'].editSchedule(
          this.id,
          this.title,
          this.text,
          this.$dateHandler.toDate(this.datetime)
      )
    }
  }
}

</script>

<style scoped lang="scss">
@import "form-mixin";

@include form;

</style>