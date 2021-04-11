<template>
  <div class="wrap"
       :class="{ 'wrap--active': active, 'wrap--not-active': !active }"
  >
    <nav class="global-nav" :class="{'active': active, 'not-active': !active}">
      <h2 class="global-nav__heading">
        <app-heading :size="'semi-large'">サイト内メニュー</app-heading>
      </h2>
      <ul class="menus">
        <template v-for="(menu, index) in menus">
          <li :key="index" class="menus__menu">
            <nuxt-link :to="menu.path">{{ menu.name }}</nuxt-link>
          </li>
        </template>
        <li class="global-nav__close">
        </li>
      </ul>
      <div class="global-nav__buttons">
        <div class="global-nav__button">
          <app-button :second="true" @click="logout">ログアウト</app-button>
        </div>
        <div class="global-nav__button">
          <app-button @click="$emit('click')">閉じる</app-button>
        </div>
      </div>
    </nav>
    <div class="margin-area" @click="$emit('click')"></div>
  </div>
</template>

<script>
import AppHeading from "@/components/atoms/heading/AppHeading";
import AppButton from "@/components/atoms/buttons/AppButton";

export default {
  name: "TheGlobalMenu",
  components: {AppButton, AppHeading},
  props: {
    active: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          name: 'ホーム',
          path: '/',
        },
        {
          id: 2,
          name: 'マイページ',
          path: '/mypage',
        },
        {
          id: 3,
          name: 'ログアウト',
          path: '/logout'
        }
      ]
    }
  },
  methods: {
    logout: function () {
      this.$emit('click')
      this.$myAuth.logout()
    }
  }
}
</script>

<style scoped lang="scss">

.wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.3s all;

  &--active {
  }

  &--not-active {
    visibility: hidden;
    opacity: 0;
  }
}

.margin-area {
  position: absolute;
  background-color: $shadow-color;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

.global-nav {
  box-sizing: border-box;
  padding: $medium-padding;
  background-color: $main-background-color;
  color: $base-font-color;
  display: block;
  position: absolute;
  width: 200px;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 1000;

  &__heading {
    margin-bottom: $large-margin;
  }

  &__close {
    text-align: center;
  }
}

.menus {
  &__menu {
    font-weight: bold;
    margin-bottom: $medium-padding;
    transition: $transition;
    &:hover {
      color: $weak-font-color;
    }
  }
}
</style>