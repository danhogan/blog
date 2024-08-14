<template>
  <div class="svg-container">
    hello
    <svg
      v-for="(star, index) in 5"
      :key="index"
      :class="{ filled: index < filledCount }"
      v-html="logo"
    ></svg>
  </div>
</template>

<script>
import logo from './logo.svg?raw';

export default {
  props: {
    filledCount: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 5,
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.svg-container {
  display: flex;
  gap: 8px;
}

svg {
  fill: none;
  transition: fill 0.3s ease;
}

svg.filled {
  fill: currentColor;
}
</style>
