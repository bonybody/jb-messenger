<template>
  <textarea
      :name="name"
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
    }
  }
}
</script>

<style scoped lang="scss">
textarea {
  display: inline-block;
  border-radius: $border-radius;
  background-color: $main-background-color;
  border-color: $medium-font-size;
  border: solid 1px;
  width: 100%;
  padding: $mini-padding;
  box-sizing: border-box;
}

</style>