<template>
  <textarea
      :name="name"
      v-model="inputValue"
  >
  </textarea>
</template>

<script>
export default {
  name: "AppTextArea",
  props: {
    name: {
      type: String,
      require: true
    },
    value: {
      type: String,
      require: true
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }

}
</script>

<style scoped lang="scss">
textarea {
  display: inline-block;
  border-radius: $border-radius;
  background-color: $main-background-color;
  border: solid 1px $shadow-color;
  width: 100%;
  padding: $mini-padding;
  box-sizing: border-box;
  transition: 0.3s all;

  &:focus {
    border-color: $primary-color;
  }

}

</style>