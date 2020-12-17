<template>
  <div class="relative overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
      <div class="relative h-full max-w-screen-xl mx-auto">
        <!-- hero -->
        <template v-if="theme === 'RL'">
          <svg-pattern-rect class="absolute bottom-0 left-full transform -translate-y-40 -translate-x-1/4 lg:-translate-x-1/2"
                            :width="394"
                            :height="786" />

          <svg-pattern-rect class="absolute top-0 right-full transform translate-y-40 translate-x-1/4 lg:translate-x-1/2"
                            :width="394"
                            :height="786" />
        </template>

        <!-- article -->
        <template v-else-if="theme === 'RLR'">
          <svg-pattern-rect class="absolute top-12 left-full transform -translate-x-1/4 lg:-translate-x-1/2"
                            :width="394"
                            :height="394" />

          <svg-pattern-rect class="absolute top-1/2 right-full transform -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2"
                            :width="394"
                            :height="394" />

          <svg-pattern-rect class="absolute bottom-12 left-full transform -translate-x-1/4 -translate-x-1/4 lg:-translate-x-1/2"
                            :width="394"
                            :height="394" />
        </template>

        <!-- corner -->
        <template v-else-if="theme === 'CORNER'">
          <svg-pattern-rect class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4
                                            lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                            :width="394"
                            :height="786" />
        </template>

        <!-- left -->
        <template v-else-if="theme === 'LEFT'">
          <svg-pattern-rect class="absolute top-0 right-1/2 transform -translate-x-1/2 -translate-y-8"
                            :width="640"
                            :height="2048" />
        </template>

        <!-- right -->
        <template v-else-if="theme === 'RIGHT'">
          <svg-pattern-rect class="absolute top-0 left-1/2 transform translate-x-1/2 -translate-y-8"
                            :width="640"
                            :height="2048" />
        </template>
      </div>
    </div>

    <div class="relative">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SvgPatternRect from '~/components/SvgPatternRect'

export default {
  name: 'LayoutBgA',
  components: { SvgPatternRect },
  props: {
    theme: {
      type: String,
      default: 'RL'
    }
  }
}
</script>
