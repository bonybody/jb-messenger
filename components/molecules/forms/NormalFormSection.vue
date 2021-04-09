<template>
  <div class="section">
    <div class="section__label">
      <app-heading :size="'medium'">
        <label :for="name">
          <slot name="label"></slot>
        </label>
      </app-heading>
    </div>
    <div class="section__form">
      <app-input :type="type" :name="name" v-model="inputValue" :id="name">
      </app-input>
    </div>
  </div>
</template>

<script>
import AppHeading from "~/components/atoms/heading/AppHeading";
import AppInput from "~/components/atoms/forms/AppInput";

export default {
  name: "NormalFormSection",
  components: {AppInput, AppHeading},
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

</style>