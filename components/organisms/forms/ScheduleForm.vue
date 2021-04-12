<template>
  <div class="wrap">
    <form-frame>
      <div class="wrap__heading">
        <app-heading :size="'semi-large'">スケジュール登録</app-heading>
      </div>
      <form class="form" @submit.prevent>
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
        </div>
        <div class="form__line">
          <normal-form-section v-model="title" :type="'text'" :name="'title'">
            <template v-slot:label>タイトル</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="date" :type="'datetime-local'" :name="'date'">
            <template v-slot:label>日付</template>
          </normal-form-section>
          <normal-form-section v-model="date" :type="'textarea'" :name="'date'">
            <template v-slot:label>概要</template>
          </normal-form-section>
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

export default {
  name: "ScheduleForm",
  components: {NormalFormSection, AppErrorMessage, AppHeading, FormFrame},
  data() {
    return {
      err: '',
      date: '',
      title: ''
    }
  }
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