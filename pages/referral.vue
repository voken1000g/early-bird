<template>
  <div>
    <hero-referral />
    <referral-address />
    <referral-rewards class="bg-indigo-50" />
  </div>
</template>

<script>
import HeroReferral from '~/components/HeroReferral'
import CompSetVoken from '~/components/CompSetVoken'
import ReferralAddress from '~/components/ReferralAddress'
import ReferralRewards from '~/components/ReferralRewards'

export default {
  name: "wallet",
  middleware: ['dapp'],
  components: { ReferralRewards, ReferralAddress, HeroReferral }
}
</script>

<style scoped>

</style>
