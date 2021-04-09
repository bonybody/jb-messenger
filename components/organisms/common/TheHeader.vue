<template>
  <header>
    <h1>
      <app-heading :size="'large'">
        <nuxt-link :to="'/'">
          ZUBORA Scheduler
        </nuxt-link>
      </app-heading>
    </h1>
    <nav>
      <ul>
        <div v-if="!isLoggedIn">
          <li>
            <app-button :mini="true" :to="'login'">ログイン</app-button>
          </li>
          <li>
            <app-button :second="true" :mini="true" :to="'sign-up'">新規登録</app-button>
          </li>
        </div>
        <div v-if="isLoggedIn">
          <li>
            <app-button :mini="true">マイページ</app-button>
          </li>
          <li>
            <app-button @click="logout()" :mini="true" :second="true">ログアウト</app-button>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import AppButton from "@/components/atoms/buttons/AppButton";
import AppHeading from "@/components/atoms/heading/AppHeading";
import {mapState, mapGetters} from 'vuex'

export default {
  name: "TheHeader",
  components: {AppHeading, AppButton},
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    logout: async function () {
      try {
        const res = await this.$myAuth.logout()
      } catch (e) {
        this.$nuxt.error(e.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
header {
  background-color: $main-background-color;
  box-sizing: border-box;
  height: 48px;
  padding: 0 $medium-padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $shadow-color;
}

h1 {
}

li {
  display: inline-block;
}
</style>