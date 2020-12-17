<template>
  <layout-bg-a theme="RL">
    <layout-for-mobi class="set-voken-address">
      <div class="py-8 px-6 bg-gradient-to-br from-red-100 to-orange-200 rounded-lg text-center">
        <h2 class="font-light text-3xl text-gray-700 text-center tracking-tight">
          {{ $t('referral.Set_your_VOKEN_address') }}
        </h2>

        <div v-if="vokenBalance.gt(0)">
          <div class="mt-8"
               :class="vokenAddressStatus"
          >
            <label for="referral-address"
                   class="block text-sm font-medium text-gray-700 text-left"
            >
              {{ $t('referral.VOKEN_wallet_address') }}
            </label>

            <div class="mt-1 relative rounded-md shadow-md">
              <input type="text"
                     name="referral-address"
                     id="referral-address"
                     ref="referral-address"
                     class="form-input input-voken-address"
                     v-model="vokenAddress"
                     :placeholder="$t('Enter_a_valid_Voken_wallet_address')"
                     aria-describedby="referral-address">

              <div v-if="vokenAddressStatus === 'success'" class="input-icon">
                <fa :icon="['fas', 'check']" />
              </div>

              <div v-if="vokenAddressStatus === 'error'" class="input-icon">
                <fa :icon="['fas', 'times']" />
              </div>

              <div v-if="vokenAddressStatus === 'warn'" class="input-icon">
                <fa :icon="['fas', 'exclamation-triangle']" />
              </div>
            </div>

            <div v-if="vokenAddressStatus === 'error'" class="input-p">
              {{ $t('referral.Not_a_VOKEN_wallet_address') }}
            </div>

            <div v-if="vokenAddressStatus === 'warn'" class="input-p">
              {{ $t('referral.The_address_is_already_exist') }}
            </div>
          </div>

          <div v-show="showButton"
               class="mt-8 flex justify-between space-x-2"
          >
            <button class="btn-swap"
                    @click="setVokenAddress"
            >
              {{ $t('referral.Set_VOKEN_address') }}
            </button>
          </div>

          <tx-info :class="{'mt-4': showButton, 'mt-8': !showButton }"
                   :status="txStatus"
                   :hash="txHash"
                   :confirmation="txConfirmation"
                   :message="txMessage" />
        </div>

        <div v-else class="mt-8">
          <div class="font-mono">
            <div class="pi">
              {{ $t('referral.You_dont_have_any_VOKEN') }}
            </div>
          </div>

          <div class="mt-8 flex justify-between space-x-2">
            <nuxt-link :to="localePath('/')"
                       class="a-referral-board"
            >
              {{ $t('referral.Go_to_Early_bird_Sale') }}
            </nuxt-link>
          </div>
        </div>

        <div class="mt-8 font-mono text-sm text-center">
          <a target="_blank" :href="$t('link.Visit_VOKEN_Web_UI_wallet_toolkit.href')" class="a-info">
            <fa :icon="['fas', 'wallet']" /> {{ $t('link.Visit_VOKEN_Web_UI_wallet_toolkit.text') }}
          </a>
        </div>
      </div>
    </layout-for-mobi>
  </layout-bg-a>
</template>

<script>
import fn from '~/utils/functions'
import vokenAddress from '../utils/voken-address'
import LayoutForMobi from '~/components/LayoutForMobi'
import LayoutBgA from '~/components/LayoutBgA'
import TxInfo from '~/components/TxInfo'

export default {
  name: 'ActivateReferralAddress',
  components: { TxInfo, LayoutBgA, LayoutForMobi },
  data() {
    return {
      vokenAddress: '',
      vInt: '0',
      referrer: null,

      showButton: true,

      txStatus: -1,
      txHash: null,
      txConfirmation: 0,
      txMessage: null
    }
  },
  watch: {
    async vokenAddress() {
      this.vInt = vokenAddress.address2vint(this.vokenAddress)

      if (this.vInt && this.vInt !== '0') {
        console.log('this.vInt:', this.vInt)

        await this.$store.state
          .vokenTbContract()
          .methods
          .voken2address(this.vInt)
          .call()
          .then(referrer => {
            this.referrer = referrer
          })
          .catch(error => {
            console.error('::: vint2address', error)
          })
      } else {
        this.referrer = null
      }
    }
  },
  computed: {
    vokenBalance() {
      return fn.amountDisplay(this.$store.state.accountStatus.vokenBalance, 9)
    },
    vokenIssued() {
      return fn.amountDisplay(this.$store.state.accountStatus.issued, 9)
    },
    vokenBonuses() {
      return fn.amountDisplay(this.$store.state.accountStatus.bonuses, 9)
    },
    vokenAddressStatus() {
      if (this.vokenAddress) {
        if (vokenAddress.isAddress(this.vokenAddress)) {
          if (fn.isNotAddress(this.referrer)) {
            return 'success'
          } else {
            return 'warn'
          }
        } else {
          return 'error'
        }
      }
    }
  },
  methods: {
    async setVokenAddress() {
      this.showButton = false
      this.txStatus = 0
      this.txMessage = null

      await this.$store
        .state
        .vokenTbContract()
        .methods
        .setVokenAddress(String(this.vInt))
        .send({ 'from': this.$store.state.account })
        .on('transactionHash', this.onTransactionHash)
        .on('receipt', this.onReceipt)
        .on('confirmation', this.onConfirmation)
        .on('error', this.onError)
        .catch(this.onError)
    },
    async onTransactionHash(txHash) {
      this.txStatus = 0
      this.txHash = txHash
    },
    async onReceipt(receipt) {
      this.txMessage = null

      if (receipt.status) {
        this.txStatus = 1
      } else {
        this.txStatus = 3
      }
    },
    async onConfirmation(confirmation) {
      if (this.txStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txStatus = 2
        } else {
          this.txStatus = 2
          await this.$store.state.dApp.getStatus()
          await this.$store.state.dApp.getAccountStatus()
        }

        this.txConfirmation = confirmation
      }
    },
    async onError(error) {
      this.txStatus = 3
      this.txMessage = error.message
      this.showButton = true
    }
  }
}
</script>

<style scoped>
.set-voken-address {
  @apply py-20;
}

.input-voken-address {
  @apply block w-full py-3 px-6 bg-white border border-gray-300 rounded-md;
}

.input-voken-address:focus {
  @apply border-orange-500 shadow-outline-orange;
}

.success .input-voken-address {
  @apply bg-green-100 border-green-700 text-green-700;
}

.success .input-voken-address:focus {
  @apply shadow-outline-green;
}

.error .input-voken-address {
  @apply bg-red-100 border-red-700 text-red-700;
}

.error .input-voken-address:focus {
  @apply shadow-outline-red;
}

.success .input-voken-address {
  @apply bg-green-100 border-green-700 text-green-700;
}

.success .input-voken-address:focus {
  @apply shadow-outline-green;
}

.warn .input-voken-address {
  @apply bg-yellow-50 border-yellow-700 text-yellow-700;
}

.warn .input-voken-address:focus {
  @apply shadow-outline-yellow;
}

.set-voken-address button {
  @apply w-full py-4 bg-gradient-to-r border border-transparent rounded-md shadow;
  @apply font-sans font-semibold text-xl text-white text-center;
}

.set-voken-address button:focus {
  @apply outline-none;
}

.set-voken-address button:active {
  @apply border-transparent;
}


.btn-bind {
  @apply from-indigo-500 to-purple-500;
}

.btn-bind:hover {
  @apply to-purple-600;
}

.btn-bind:active {
  @apply to-purple-500 shadow-outline-purple;
}

.btn-swap {
  @apply from-orange-500 to-pink-500;
}

.btn-swap:hover {
  @apply to-pink-600;
}

.btn-swap:active {
  @apply to-pink-500 shadow-outline-pink;
}

.a-referral-board {
  @apply w-full py-4 bg-gradient-to-r border border-transparent rounded-md shadow;
  @apply from-orange-500 to-pink-500;
  @apply font-sans font-semibold text-xl text-white text-center;
}

.a-referral-board:hover {
  @apply to-pink-600;
}

.a-info {
  @apply pb-2 px-2 text-gray-500;
}

.a-info:hover {
  @apply border-b border-blue-600 text-blue-600;
}
</style>
