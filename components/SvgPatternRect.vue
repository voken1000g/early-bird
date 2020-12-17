<template>
  <svg fill="none"
       :width="width"
       :height="height"
       :viewBox="viewBox"
  >
    <defs>
      <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49"
               x="0"
               y="0"
               width="20"
               height="20"
               patternUnits="userSpaceOnUse"
      >
        <rect x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor" />
      </pattern>
    </defs>
    <rect :width="width"
          :height="height"
          fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
  </svg>
</template>

<script>
export default {
  name: 'SvgPatternRect',
  props: {
    width: {
      type: Number,
      default: 404
    },
    height: {
      type: Number,
      default: 784
    }
  },
  computed: {
    viewBox() {
      return '0 0 ' + this.width + ' ' + this.height
    }
  }
}
</script>

<style scoped>

</style>
