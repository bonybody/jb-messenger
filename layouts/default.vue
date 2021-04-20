<template>
  <div class="container">
    <div class="header">
      <the-header/>
    </div>
    <main>
      <Nuxt/>
    </main>
    <div class="button" v-if="$myAuth.loggedIn()">
      <app-button
          :second="true"
          :circle="true"
          @click="changeModalState"
      ><span class="button__text">+</span></app-button>
    </div>
    <div class="modal__content" v-if="$myAuth.loggedIn()">
      <modal-frame :active="modalState" @click="changeModalState">
        <div class="modal__form">
          <schedule-form/>
        </div>
      </modal-frame>
    </div>
  </div>
</template>
<script>
import TheHeader from "@/components/organisms/common/TheHeader";
import AppButton from "@/components/atoms/buttons/AppButton";
import ModalFrame from "@/components/atoms/frames/ModalFrame";
import ScheduleForm from "@/components/organisms/forms/ScheduleForm";

export default {
  components: {ScheduleForm, ModalFrame, AppButton, TheHeader},
  data() {
    return {
      modalState: false
    }
  },
  computed: {
    loggedIn() {
      return this.$myAuth.loggedIn()
    }
  },
  methods: {
    changeModalState() {
      this.modalState = !this.modalState
    }
  }
}
</script>
<style scoped lang="scss">

.container {
  width: 100%;
  height: 100%;
  position: relative;
}

.header {
  margin-bottom: $large-margin;
}

main {
  box-sizing: border-box;
  padding: 0 $medium-padding;
}

.button {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 100;
  width: 50px;
  height: 50px;

  &__text {
    font-size: $large-margin;
  }
}

.modal {
  &__content {
    width: 100%;
    height: 100%;
  }

  &__form {
    z-index: $modal-content-z-index;
    box-sizing: border-box;
    padding: 0 $medium-padding;
    width: 100%;
    max-width: 400px;
  }
}
</style>
