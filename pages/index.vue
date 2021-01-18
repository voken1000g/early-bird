<template>
  <div class="pb-12">
    <hero-early-bird/>
    <swap/>
    <voken-profile class="bg-gray-50"/>
    <dive-to-referral/>
  </div>
</template>

<script>
import HeroEarlyBird from '~/components/HeroEarlyBird'
import Swap from '~/components/Swap'
import VokenProfile from '~/components/VokenProfile'
import DiveToReferral from '~/components/DiveToReferral'

export default {
  name: 'index',
  middleware: ['dapp'],
  components: { DiveToReferral, VokenProfile, Swap, HeroEarlyBird },
}
</script>

<style scoped>

</style>
