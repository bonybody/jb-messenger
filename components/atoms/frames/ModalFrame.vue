<template>
  <div class="frame"
       :class="{
    'not-active': !active
       }"
  >
    <slot></slot>
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
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: $modal-content-z-index;
  top: 0;
  right: 0;
  transition: $transition;
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-active {
  visibility: hidden;
  opacity: 0;
}

.margin-area {
  top: 0;
  right: 0;
  position: absolute;
  background-color: $modal-background-color;
  opacity: 0.9;
  width: 100%;
  height: 100%;
}

</style>