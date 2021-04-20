<template>
  <div class="wrap">
    <login-form/>
  </div>
</template>

<script>
import LoginForm from "~/components/organisms/forms/LoginForm";
export default {
  components: {LoginForm},
}
</script>

<style scoped lang="scss">
.wrap {
  max-width: 380px;
  margin: 0 auto;
}
.button {
}
form {
}
</style>
