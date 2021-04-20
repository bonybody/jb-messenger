<template>
  <header class="header">
    <div class="header__left">
      <h1>
        <app-heading :size="'large'">
          <nuxt-link :to="'/'">
            ZUBORA Scheduler
          </nuxt-link>
        </app-heading>
      </h1>
    </div>
    <div class="header__right">
      <nav class="header__nav">
        <ul v-show="!$myAuth.loggedIn()">
          <li>
            <app-button :mini="true" @click="login">ログイン</app-button>
          </li>
          <li>
            <app-button :second="true" :mini="true" :to="'sign-up'">新規登録</app-button>
          </li>
        </ul>
        <ul v-show="$myAuth.loggedIn()">
          <li class="global-nav__toggle">
            <app-button :second="true" :mini="true" @click="changeMenuState">メニュー</app-button>
          </li>
        </ul>
        <div class="global-nav__nav">
          <the-global-menu :active="menuState" @click="changeMenuState"/>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import AppButton from "@/components/atoms/buttons/AppButton";
import AppHeading from "@/components/atoms/heading/AppHeading";
import {mapState, mapGetters} from 'vuex'
import TheGlobalMenu from "@/components/molecules/commons/TheGlobalMenu";
import AppToggleButton from "@/components/atoms/buttons/AppToggleButton";

export default {
  name: "TheHeader",
  components: {AppToggleButton, TheGlobalMenu, AppHeading, AppButton},
  data() {
    return {
      menuState: false
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    login: async function () {
      try {
        await this.$myAuth.loginByLine()
      } catch (e) {
        this.$nuxt.error(e.message)
      }
    },
    logout: async function () {
      try {
        const res = await this.$myAuth.logout()
      } catch (e) {
        this.$nuxt.error(e.message)
      }
    },
    changeMenuState: function () {
      this.menuState = !this.menuState
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: $main-background-color;
  box-sizing: border-box;
  height: 48px;
  padding: 0 $medium-padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $shadow-color;

  &__nav {
    display: inline-block;
  }

  &__right {
    display: flex;
    align-items: center;
  }
}

h1 {
}

li {
  display: inline-block;
}

.global-nav {
  margin: 0 $mini-margin;
  display: inline-block;

  &__nav {
    position: relative;
  }

  &__toggle {
  }
}
</style>