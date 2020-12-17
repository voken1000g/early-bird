<template>
  <div>
    <SiteNav/>
    <Nuxt/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav'
import SiteFooter from '~/components/SiteFooter'

export default {
  middleware: ['referral', 'dapp'],
  components: { SiteFooter, SiteNav }
}

</script>

<style scoped>

</style>
