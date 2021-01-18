<template>
  <div class="bg-indigo-800">
    <div class='resp-container border-t border-indigo-600 py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
        <div class="w-full">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ $t('referral.Referral_system') }}
          </h1>
          <p class="mt-5 text-xl text-indigo-300">
            {{ $t('referral.Tell_a_friend_about__') }}
          </p>

          <ul class="rp-features-ul">
            <li>
              {{ $t('referral.Share_your_referral_address_or_link__') }}
            </li>
            <li>
              {{ $t('referral.You_can_receive_the_rewards_for__') }}
            </li>
            <li>
              {{ $t('referral.Payout_are_finalized_and_issued__') }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 font-mono text-base text-center">
        <a target="_blank" :href="$t('link.Learn_more_about_referral_system.href')" class="a-info">
          <fa :icon="['fas', 'info-circle']" /> {{ $t('link.Learn_more_about_referral_system.text') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeroReferral',
}
</script>

<style scoped>
.rp-features-ul {
  @apply mt-5 pl-5 list-disc font-mono text-indigo-300;
}

.rp-features-ul li {
  @apply leading-7;
}


.a-info {
  @apply pb-2 px-2 text-indigo-200;
}

.a-info:hover {
  @apply border-b border-indigo-300 text-indigo-300;
}
</style>
