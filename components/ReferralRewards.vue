<template>
  <layout-bg-a theme="RL" class="pt-20 pb-32">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl text-center">
      <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('referral.Referral_rewards') }}
      </h2>
    </div>

    <div class="mt-12 max-w-xl mx-auto flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col">
                  {{ $t('referral.Depth') }}
                </th>
                <th scope="col">
                  {{ $t('referral.Reward') }}
                </th>
                <th scope="col">
                  {{ $t('referral.Transaction_hash') }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="reward in rewards">
                <td>
                  #{{ reward.level }}
                </td>
                <td>
                  {{ reward.etherReward }} ETH
                </td>
                <td>
                  <a target="_blank" :href="txHref(reward.transactionHash)">
                    {{ $t('referral.View') }}
                  </a>
                </td>
              </tr>
              <tr v-if="rewards.length === 0">
                <td colspan="3">
                  {{ $t('referral.No_Referrals') }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="mt-6 font-mono text-sm text-center">
        <a target="_blank" :href="$t('link.Learn_more_about_referral_system.href')" class="a-info">
          <fa :icon="['fas', 'info-circle']" /> {{ $t('link.Learn_more_about_referral_system.text') }}
        </a>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
import fn from '~/utils/functions'
import LayoutBgA from '~/components/LayoutBgA'

export default {
  name: 'ReferralRewards',
  components: { LayoutBgA },
  data() {
    return {
      fn: fn,
      rewards: []
    }
  },
  async mounted() {
    await this.getRewards()
  },
  methods: {
    async getRewards() {
      await this.$store.state
        .earlyBirdContract()
        .getPastEvents(
          'Reward', {
            filter: { referrer: this.$store.state.account },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onRewards)
    },
    async onRewards(events) {
      if (events.length > 0) {
        console.log('events:', events)

        let rewards = []
        for (let i = 0; i < events.length; i++) {
          rewards.push({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
            level: events[i].returnValues.level,
            etherReward: fn.amountDisplay(events[i].returnValues.weiReward, 18)
          })
        }

        this.rewards = rewards

      }
    },
    txHref(txHash) {
      return 'https://etherscan.io/tx/' + txHash
    }
  }
}
</script>

<style scoped>
thead tr th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
}

tbody tr:nth-child(odd) {
  @apply bg-white;
}

tbody tr:nth-child(even) {
  @apply bg-gray-50;
}

tbody tr:hover {
  @apply bg-indigo-50;
}

tbody tr td {
  @apply px-6 py-4 text-sm text-gray-500;
}

tbody tr td a {
  @apply text-indigo-500;
}

tbody tr td a:hover {
  @apply text-indigo-600 underline;
}

.a-info {
  @apply pb-2 px-2 text-blue-500;
}

.a-info:hover {
  @apply border-b border-blue-600 text-blue-600;
}
</style>
