<template>
  <div class='bg-gradient-to-br from-white to-indigo-200' @click='hideNavAll'>
    <div class='bg-wallet min-h-screen w-full'>
      <div class='mx-auto'>
        <site-nav/>
        <Nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import SiteNav from '~/components/SiteNav'

export default {
  components: { SiteNav },
  methods: {
    hideNavAll() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>

<style scoped>
.bg-wallet {
  background: url("../assets/bg/particles.svg") no-repeat;
  @apply bg-cover;
}

/**
 * bg-gradient-to-br from-white to-indigo-200
 */
</style>
