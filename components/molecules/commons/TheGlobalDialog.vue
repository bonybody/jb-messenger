<template>
  <modal-frame :active="$globalDialog.state" @click="$globalDialog.closeModal()">
    <div class="dialog">
      <app-frame>
        <div class="dialog__line">
          <app-heading size="semi-large">{{ $globalDialog.title }}</app-heading>
        </div>
        <div class="dialog__line">
          <span>{{ $globalDialog.text }}</span>
        </div>
        <div class="dialog__line dialog__line--multi-column">
          <app-button :mini="true" @click="$globalDialog.callback">OK</app-button>
          <app-button :mini="true" :second="true" @click="$globalDialog.closeModal()">閉じる</app-button>
        </div>
      </app-frame>
    </div>
  </modal-frame>
</template>

<script>
import ModalFrame from "@/components/atoms/frames/ModalFrame";
import AppFrame from "@/components/atoms/frames/AppFrame";
import AppHeading from "@/components/atoms/heading/AppHeading";
import AppButton from "@/components/atoms/buttons/AppButton";

export default {
  name: "TheGlobalDialog",
  components: {AppButton, AppHeading, AppFrame, ModalFrame},
}
</script>

<style scoped lang="scss">
.dialog {
  width: 100%;
  z-index: $modal-content-z-index;
  max-width: 400px;

  &__line {
    margin-bottom: $medium-margin;

    &--multi-column {
      display: flex;
      justify-content: flex-end;

      *:not(first-child) {
        margin-left: $medium-margin;
      }
    }
  }
}
</style>