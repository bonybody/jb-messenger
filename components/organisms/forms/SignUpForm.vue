<template>
  <div class="form">
    <form-frame>
      <div class="form__line form__line--heading">
        <app-heading size="large">新規登録</app-heading>
      </div>
      <form class="form__section" @submit.prevent="signUp">
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
        </div>
        <div class="form__line">
          <normal-form-section v-model="name" :type="'text'" :name="'name'">
            <template v-slot:label>ユーザー名</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="email" :type="'email'" :name="'email'">
            <template v-slot:label>メールアドレス</template>
          </normal-form-section>
        </div>
        <div class="form__line">
          <normal-form-section v-model="password" :type="'password'" :name="'password'">
            <template v-slot:label>パスワード</template>
          </normal-form-section>
        </div>
        <div class="form__line--button">
          <app-button @click="signUp()">新規登録</app-button>
        </div>
      </form>
      <div class="form__line form__line--link">
        <app-text-link :to="'login'">ログイン</app-text-link>
      </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from "~/components/atoms/frames/FormFrame";
import AppButton from "~/components/atoms/buttons/AppButton";
import AppHeading from "~/components/atoms/heading/AppHeading";
import NormalFormSection from "@/components/molecules/forms/NormalFormSection";
import AppErrorMessage from "@/components/atoms/errors/AppErrorMessage";
import AppTextLink from "@/components/atoms/links/AppTextLink";


export default {
  name: "SignUpForm",
  components: {AppTextLink, AppErrorMessage, NormalFormSection, AppHeading, FormFrame, AppButton},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      err: ''
    }
  },
  methods: {
    async signUp() {
      try {
        await this.$myAuth.signUpByEmailWithName(
            this.email,
            this.password,
            this.name
        )
      } catch (e) {
        this.err = e.message
      }
    },
  }

}
</script>

<style scoped lang="scss">
@include form;
</style>