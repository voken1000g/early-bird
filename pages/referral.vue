<template>
  <div>
    <hero-referral/>
    <activate-referral-address v-if="$store.state.accountStatus.voken.eq(0)" />
    <div v-else>
      <referral-address/>
    </div>
    <referral-rewards class="bg-indigo-50"/>
  </div>
</template>

<script>
import HeroReferral from '~/components/HeroReferral'
import ActivateReferralAddress from '~/components/ActivateReferralAddress'
import ReferralAddress from '~/components/ReferralAddress'
import ReferralRewards from '~/components/ReferralRewards'

export default {
  name: "referral",
  layout: 'dapp',
  components: { ReferralRewards, ReferralAddress, ActivateReferralAddress, HeroReferral }
}
</script>

<style scoped>

</style>
