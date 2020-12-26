<template>
  <div>
    <hero-referral/>
    <div v-if="this.$store.state.accountStatus.voken.eq(0)">
      <referral-set-address />

    </div>
    <div v-else>
      <referral-address/>
      <referral-rewards class="bg-indigo-50"/>
    </div>
  </div>
</template>

<script>
import HeroReferral from '~/components/HeroReferral'
import ReferralSetAddress from '~/components/ReferralSetAddress'
import ReferralAddress from '~/components/ReferralAddress'
import ReferralRewards from '~/components/ReferralRewards'

export default {
  name: "wallet",
  layout: 'dapp',
  components: { ReferralRewards, ReferralAddress, ReferralSetAddress, HeroReferral }
}
</script>

<style scoped>

</style>
