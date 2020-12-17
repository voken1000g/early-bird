<template>
  <div>
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            VokenTB {{ $t('Profile')}}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Details of VokenTB (Voken TeraByte)
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Token_name') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Voken TeraByte
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Token_symbol') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                VokenTB
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Description') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $t('Voken_is_the_only_utility_token') }}
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Anchored_resource') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $t('__greater_than') }} 1 TB (1,000 GB) {{ $t('general_traffic') }}{{ $t('_dynamic_pricing_will_be_supported') }}
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Decimals') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                9
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Total_supply') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ $t('Million_210') }}{{ $t('__lp') }}{{ vokenTotalSupply }} {{ $t('for_now') }}{{ $t('__rp') }}
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Distribution_for_Early_bird') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                5% ~ {{ $t('Million_10_5') }}{{ $t('__comma') }}{{ earlyBirdProcess.toFixed(4) }}% {{ $t('finished') }}
              </dd>
            </div>

            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ $t('Distribution_for_Public_sale') }}
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                40% ~ {{ $t('Million_84') }}{{ $t('__comma') }}{{ $t('NOT_STARTED') }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fn from '~/utils/functions'

export default {
  name: 'VokenProfile',
  computed: {
    vokenTotalSupply() {
      return fn.amountDisplay(this.$store.state.status.vokenTotalSupply, 9)
    },
    vokenIssued() {
      return fn.amountDisplay(this.$store.state.status.vokenIssued, 9)
    },
    earlyBirdProcess() {
      return (
        this.$store.state.status.vokenIssued
          .div(this.$store.state.status.vokenCap.multipliedBy(5).div(100))
          .multipliedBy(100)
      )
    }
  }
}
</script>

<style scoped>

</style>
