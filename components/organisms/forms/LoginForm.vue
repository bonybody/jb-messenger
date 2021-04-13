<template>
  <div class="form">
    <form-frame>
      <div class="form__line form__line--heading">
        <app-heading size="semi-large">ログイン</app-heading>
      </div>
      <form @submit.prevent="login">
        <div class="form__line">
          <app-error-message>{{ err }}</app-error-message>
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
        <div class="form__line form__line--button">
          <app-button :type="'submit'">ログイン</app-button>
        </div>
      </form>
      <div class="form__line form__line--link">
        <app-text-link :to="'sign-up'">新規登録</app-text-link>
      </div>
    </form-frame>
  </div>
</template>

<script>
import FormFrame from "~/components/atoms/frames/FormFrame";
import AppButton from "~/components/atoms/buttons/AppButton";
import AppInput from "~/components/atoms/forms/AppInput";
import AppHeading from "~/components/atoms/heading/AppHeading";
import NormalFormSection from "@/components/molecules/forms/NormalFormSection";
import AppErrorMessage from "@/components/atoms/errors/AppErrorMessage";
import AppTextLink from "@/components/atoms/links/AppTextLink";


export default {
  name: "LoginForm",
  components: {AppTextLink, AppErrorMessage, NormalFormSection, AppHeading, FormFrame ,AppInput, AppButton},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      err: ''
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.$myAuth.loginByEmail(this.email, this.password)
      } catch (e) {
        this.err = e.message
      }
    }
  }

}
</script>

<style scoped lang="scss">
.form {
  margin: 0 auto;
  &__line {
    margin-bottom: $semi-large-margin;
    &--button {
      margin-top: $large-margin;
    }
    &--heading {
      text-align: center;
    }
    &--link {
      text-align: right;
    }

  }
}
</style>