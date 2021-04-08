<template>
  <div class="container">
    <form @submit.prevent="createUser">
      <div>
        <span>{{ err }}</span>
      </div>
      <div>
        <input type="text" v-model="name">
      </div>
      <div>
        <input type="email" v-model="email">
      </div>
      <div>
        <input type="password" v-model="password">
      </div>
      <div>
        <button type="submit">新規登録</button>
      </div>
    </form>
    <div>
      <button @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      err: ''
    }
  },
  methods: {
    async createUser() {
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

<style>
</style>
