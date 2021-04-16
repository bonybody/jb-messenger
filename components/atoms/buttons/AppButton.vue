<template>
  <button
      :type="type"
      @click="click"
      :class="{
      disabled: disabled,
      danger: danger,
      second: second,
      mini: mini,
      auto: !mini,
      click: onClick,
      circle: circle
    }"
      :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    second: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    to: {
      type: String | Object,
      default: null
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      onClick: false,
      interval: null
    }
  },
  methods: {
    click: function () {
      this.onClick = true
      if (this.to) {
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
      setTimeout(() => {
        this.onClick = false
      }, 300)
    }
  }

}
</script>

<style scoped lang="scss">
button {
  display: inline-block;
  font-weight: bold;
  border-radius: $border-radius;
  background-color: $primary-color;
  color: $on-font-color;
  font-size: $mini-font-size;
  text-align: center;
  padding: $medium-padding;
  box-sizing: border-box;
  transition: $transition;
  @include hover() {
    filter: $hover-filter;
  }
}

.auto {
  width: 100%;
  height: 100%;
}

.mini {
  min-width: 80px;
}

.second {
  color: $primary-color;
  border: 1px solid $primary-color;
  background-color: $main-background-color;
}

.click {
  animation-direction: normal;
  animation-duration: 0.3s;
  animation-name: anim_sc;
  filter: brightness(100%);
}

.circle {
  border-radius: 1000px;
}

@keyframes anim_sc {
  50% {
    filter: brightness(120%);
  }

  100% {
    filter: brightness(100%);
  }
}
</style>