<template>
  <p>{{ rating }} of 5</p>
  <div class="svg-container w-full">
    <div
      v-for="(star, index) in 5"
      :key="index"
      v-html="logo"
      :class="{ filled: index < rating }"
      class="svg-wrapper"
    ></div>
  </div>
</template>

<script>
import logo from '/logo.svg?raw';

export default {
  props: {
    rating: {
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
  justify-content: space-between;
}

.svg-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}

.svg-wrapper svg {
  width: 100%;
  height: auto;
}

.svg-wrapper {
  color: transparent;
}

.svg-wrapper.filled {
  color: #e29b2f;
}

.svg-container ::v-deep .svg-wrapper svg g {
  stroke: white;
}

.svg-container ::v-deep .svg-wrapper.filled svg g {
  stroke: transparent;
}
</style>
