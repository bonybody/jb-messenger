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
      <app-text-area v-if="type === 'textarea'" :placeholder="placeholder" :name="name"></app-text-area>
      <app-input v-else :type="type" :placeholder="placeholder" :name="name" v-model="inputValue" :id="name">
      </app-input>
    </div>
  </div>
</template>

<script>
import AppHeading from "~/components/atoms/heading/AppHeading";
import AppInput from "~/components/atoms/forms/AppInput";
import AppTextArea from "@/components/atoms/forms/AppTextArea";

export default {
  name: "NormalFormSection",
  components: {AppTextArea, AppInput, AppHeading},
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
    },
    placeholder: {
      type: String,
      default: ''
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
.section {
  &__label {
    margin-bottom: $mini-margin;
  }
}
</style>