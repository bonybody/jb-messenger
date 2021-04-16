<template>
  <div class="container">
    <div class="header">
      <the-header/>
    </div>
    <main>
      <Nuxt/>
    </main>
    <div class="button">
      <app-button
          :second="true"
          :circle="true"
          @click="changeModalState"
      ><span class="button__text">+</span></app-button>
    </div>
    <div class="modal-form">
      <modal-frame :active="modalState" @click="changeModalState">
        <schedule-form/>
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
  methods: {
    changeModalState() {
      this.modalState = !this.modalState
    }
  }
}
</script>
<style scoped lang="scss">

.container {
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
</style>
