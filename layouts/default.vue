<template>
  <div @click='hideNavMenu'>
    <SiteNav/>
    <Nuxt/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav'
import SiteFooter from '~/components/SiteFooter'

export default {
  middleware: ['referral'],
  components: { SiteFooter, SiteNav },
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}

</script>

<style scoped>

</style>
