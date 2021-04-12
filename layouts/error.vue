<template>
  <div class="ErrorPage">
    <div class="ErrorPage__content">
      <div class="ErrorPage__inner">
        <template v-if="error.statusCode === 404">
          <span>ERROR</span>
          <h2>ページが見つかりません。</h2>
          <p>URLに間違いがないかご確認ください。</p>
          <nuxt-link to="/"> TOP</nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>