<template>
  <div class="wrap">
    <sign-up-form/>
  </div>
</template>

<script>
import SignUpForm from "@/components/organisms/forms/SignUpForm";
export default {
  components: {SignUpForm}
}
</script>

<style scoped lang="scss">
.wrap {
  max-width: 380px;
  margin: 0 auto;
}
</style>