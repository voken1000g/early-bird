<template>
  <layout-bg-a theme="CORNER" class="py-20 text-center">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('referral.Referral_address_or_link') }}
      </h2>
      <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
        {{ $t('referral.You_would_get_rewarded_from__') }}
      </p>

      <!--  Referral address  -->
      <div class="mt-12 max-w-xl mx-auto text-left">
        <label for="referral_address"
               class="mt-6 block text-sm font-medium text-gray-500 text-left">
          {{ $t('referral.Referral_address') }}
        </label>

        <div class="mt-1 relative rounded-md shadow-md">
          <input type="text"
                 ref="referral-address"
                 name="referral-address"
                 id="referral_address"
                 class="form-input referral-input"
                 :value="referralAddress">

          <div class="absolute inset-y-0 right-0 pr-6 flex items-center">
            <button class="btn-copy" @click="copyReferralAddress">
              <fa :icon="['fas', 'copy']" />
            </button>
          </div>
        </div>
      </div>

      <!--  Referral link  -->
      <div class="mt-12 max-w-xl mx-auto text-left">
        <label for="referral_link"
               class="mt-6 block text-sm font-medium text-gray-500 text-left">
          {{ $t('referral.Referral_link') }}
        </label>

        <div class="mt-1 relative rounded-md shadow-md">
          <input type="text"
                 ref="referral-link"
                 name="referral-link"
                 id="referral_link"
                 class="form-input referral-input"
                 :value="referralLink">

          <div class="absolute inset-y-0 right-0 pr-6 flex items-center">
            <button class="btn-copy" @click="copyReferralLink">
              <fa :icon="['fas', 'copy']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
import LayoutBgA from '~/components/LayoutBgA'
import LayoutForMobi from '~/components/LayoutForMobi'

export default {
  name: 'ReferralAddress',
  components: { LayoutForMobi, LayoutBgA },
  computed: {
    referralAddress() {
      return this.$store.state.accountStatus.vokenAddress
    },
    referralLink() {
      return (
        location.protocol + '//' + location.host
        +
        process.env.baseUrl
        +
        '?r='
        +
        this.$store.state.accountStatus.vokenAddress
      )
    },
  },
  methods: {
    async copyReferralAddress() {
      this.$refs['referral-address'].select()

      if (document.execCommand('copy')) {
        document.execCommand('copy');
        this.$toast.success('Referral address copied')
      } else {
        this.$toast.error('Copy failed')
      }
    },
    async copyReferralLink() {
      this.$refs['referral-link'].select()

      if (document.execCommand('copy')) {
        document.execCommand('copy');
        this.$toast.success('Referral link copied')
      } else {
        this.$toast.error('Copy failed')
      }
    }
  }
}
</script>

<style scoped>
.referral-input {
  @apply block w-full py-4 pl-4 pr-12 bg-white border-2 border-gray-300 rounded-md;
  @apply font-mono text-sm text-indigo-600;
}

.referral-input:focus {
  @apply border-indigo-500 shadow-outline-indigo;
}

.btn-copy {
  @apply text-indigo-500;
}

.btn-copy:hover {
  @apply text-indigo-300;
}

.btn-copy:focus {
  @apply text-indigo-400 outline-none;
}
</style>
