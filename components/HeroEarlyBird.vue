<template>
  <div class="bg-indigo-800">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
        <div class="max-w-xl">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ $t('Early_bird_sale') }}
          </h1>
          <p class="mt-5 text-xl text-indigo-300">
            {{ $t('Ethereum_smart_contracts_ensure__') }}
          </p>

          <ul class="eb-features-ul">
            <li>
              {{ $t('Five_percent_for_early_bird') }}
            </li>
            <li>
              {{ $t('Only_one_purchase_per_address') }}
            </li>
            <li>
              {{ $t('Maximum_') }} {{ weiMax.toFixed(1) }} ETH
            </li>
            <li>
              {{ $t('Minimum_') }} {{ weiMin.toFixed(1) }} ETH
            </li>
          </ul>
        </div>
        <div class="mt-10 w-full max-w-xs lg:mt-0">
          <div>
            <div class="block text-base font-medium text-indigo-300">
              ETH {{ $t('realtime_price') }}
            </div>

            <div class="mt-2 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <span class="text-gray-500">
                  $
                </span>
              </div>

              <div class="block w-full py-4 pl-7 pr-12 bg-indigo-50 border-gray-300 rounded-md">
                {{ etherUSDPrice.toFixed(6) }}
              </div>

              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span class="text-gray-500">
                  USD
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="block text-base font-medium text-indigo-300">
              VokenTB {{ $t('realtime_price') }}
            </div>

            <div class="mt-2 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <span class="text-gray-500">
                  $
                </span>
              </div>

              <div class="block w-full py-4 pl-7 pr-12 bg-indigo-50 border-gray-300 rounded-md">
                {{ vokenUSDPrice.toFixed(6) }}
              </div>

              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span class="text-gray-500">
                  USD
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6 text-indigo-300 text-left lg:text-center">
            {{ $t('Block_height_') }} #{{ $store.state.blockNumber > 0 ? $store.state.blockNumber : 'loading next...' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fn from '~/utils/functions'

export default {
  name: 'HeroEarlyBird',
  computed: {
    etherUSDPrice() {
      return fn.amountDisplay(this.$store.state.status.etherUSDPrice, 6)
    },
    vokenUSDPrice() {
      return fn.amountDisplay(this.$store.state.status.vokenUSDPrice, 6)
    },

    weiMin() {
      return fn.amountDisplay(this.$store.state.status.weiMin, 18)
    },
    weiMax() {
      return fn.amountDisplay(this.$store.state.status.weiMax, 18)
    }
  }
}
</script>

<style scoped>
.eb-features-ul {
  @apply mt-5 pl-5 list-disc font-mono text-indigo-300;
}

.eb-features-ul li {
  @apply leading-7;
}
</style>
