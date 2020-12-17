<template>
  <layout-bg-a theme="CORNER" class="py-20">
    <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
      Referral link
    </h2>
    <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-500 text-center">
      By sharing this link,
      your friend can easily bind your referral address, then get an additional 1%-10% bonus.
    </p>

    <div
      class="mt-12 max-w-3xl mx-auto py-4 px-6 border-2 border-pink-500 rounded-md shadow-sm flex justify-between space-x-4 font-mono text-sm lg:text-base text-pink-600"
    >
      <span class="break-all">
        {{ rootPath }}{{ localePath('/') }}?r={{ $store.state.accountStatus.vokenAddress }}
      </span>

      <button class="btn-copy-address">
        <fa :icon="['fas', 'copy']" />
      </button>
    </div>
  </layout-bg-a>
</template>

<script>
import LayoutBgA from '~/components/LayoutBgA'
import LayoutForMobi from '~/components/LayoutForMobi'

export default {
  name: 'ReferralLink',
  components: { LayoutForMobi, LayoutBgA },
  computed: {
    rootPath() {
      return location.protocol + '//' + location.host
    },
  }
}
</script>

<style scoped>
.btn-copy-address {
  @apply text-pink-600;
}

.btn-copy-address:hover {
  @apply text-pink-400;
}

.btn-copy-address:focus {
  @apply text-pink-500 outline-none;
}
</style>
