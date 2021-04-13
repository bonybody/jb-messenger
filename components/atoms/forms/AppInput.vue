<template>
    <input
        :type="type"
        :name="name"
        v-model="inputValue">
</template>

<script>
export default {
  name: "AppInput",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    value: {
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
input {
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