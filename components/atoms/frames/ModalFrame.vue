<template>
  <div class="frame"
       :class="{
    'not-active': !active
       }"
  >
    <div class="frame__content">
      <slot></slot>
    </div>
    <div class="margin-area" @click="$emit('click')"></div>
  </div>
</template>

<script>
export default {
  name: "ModalFrame",
  props: {
    active: {
      type: Boolean,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  transition: $transition;

  &__content {
    z-index: 1001;
  }
}

.not-active {
  visibility: hidden;
  opacity: 0;
}

.margin-area {
  position: absolute;
  background-color: $modal-background-color;
  opacity: 0.9;
  width: 100%;
  height: 100%;
}

</style>