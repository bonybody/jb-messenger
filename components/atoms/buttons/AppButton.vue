<template>
  <button
      :type="type"
      @click="click"
      @animationend="onClick = false"
      :class="{
      disabled: disabled,
      danger: danger,
      second: second,
      mini: mini,
      auto: !mini,
      click: onClick
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
    }
  }

}
</script>

<style scoped lang="scss">
button, a {
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
}

button:hover, a:hover {
  filter: $hover-filter;
}

.auto {
  width: 100%;
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