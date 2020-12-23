<template>
  <layout-bg-a v-if="$store.state.account"
               theme="RL">
    <layout-for-mobi class="swap">
      <div class="py-8 px-6 bg-indigo-100 rounded-lg text-center">
        <h2 class="font-light text-3xl text-gray-700 text-center tracking-tight">
          VokenTB {{ $t('Early_bird_sale') }}
        </h2>

        <div class="mt-1 text-xs text-gray-400">
          {{ $store.state.earlyBirdContractAddress }}
        </div>

        <!--  No Payment Event  -->
        <div v-if="vokenIssued.eq(0)" class="font-mono">
          <label for="from"
                 class="mt-6 block text-sm font-medium text-gray-700 text-left">
            {{ $t('From') }}
          </label>

          <div class="mt-1 relative rounded-md shadow-md text-2xl">
            <input type="text"
                   name="from"
                   id="from"
                   class="form-input swap-input"
                   v-model="etherAmount"
                   placeholder="0.1 - 1.0"
                   aria-describedby="currency-eth">

            <div class="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <span class="token text-gray-500"
                    id="currency-eth"
              >
                ETH
              </span>
            </div>
          </div>

          <div class="mt-1 text-sm text-gray-500 text-right">
            {{ $t('Balance_') }} {{ etherBalance }} ETH
          </div>

          <div class="mt-6 text-xl text-indigo-400">
            <fa :icon="['fas', 'arrow-down']" />
          </div>

          <label for="to"
                 class="mt-2 block text-sm font-medium text-gray-700 text-left">
            {{ $t('To_estimated_') }}
          </label>

          <div class="mt-1 relative rounded-md shadow-md text-2xl">
            <input type="text"
                   name="to"
                   id="to"
                   class="form-input swap-input"
                   v-model="vokenAmount.toFixed(3)"
                   placeholder="1000.00"
                   aria-describedby="currency-voken"
                   disabled>

            <div class="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <span class="token text-gray-500"
                    id="currency-voken"
              >
                VokenTB
              </span>
            </div>
          </div>

          <div class="mt-8 flex items-center justify-center">
            <layout-switch-referral-address :is-on.sync="showReferralAddress">
              <template #textOn>
                {{ $t('Get_1_to_10_percent_random_bonus_for_free') }}
              </template>

              <template #textOff>
                {{ $t('Get_1_to_10_percent_random_bonus_for_free') }}
              </template>
            </layout-switch-referral-address>
          </div>

          <div v-if="showReferralAddress && this.$store.state.accountStatus.referrerVoken.eq(0)"
               class="mt-4"
               :class="referralAddressStatus"
          >
            <label for="referral-address"
                   class="block text-sm font-medium text-gray-700 text-left"
            >
              {{ $t('Referral_address') }}
            </label>

            <div class="mt-1 relative rounded-md shadow-md">
              <input type="text"
                     name="referral-address"
                     id="referral-address"
                     ref="referral-address"
                     class="form-input swap-input-referral-address"
                     v-model="referralAddress"
                     :placeholder="$t('Enter_a_valid_Voken_wallet_address')"
                     aria-describedby="referral-address">

              <div v-if="referralAddressStatus === 'success'" class="input-icon">
                <fa :icon="['fas', 'check']" />
              </div>

              <div v-if="referralAddressStatus === 'error'" class="input-icon">
                <fa :icon="['fas', 'times']" />
              </div>

              <div v-if="referralAddressStatus === 'warn'" class="input-icon">
                <fa :icon="['fas', 'exclamation-triangle']" />
              </div>
            </div>

            <div v-if="referralAddressStatus === 'success'" class="input-p">
              Click "Bind", then "Get VokenTB".
            </div>

            <div v-if="referralAddressStatus === 'error'" class="input-p">
              Not a Voken wallet address
            </div>

            <div v-if="referralAddressStatus === 'warn'" class="input-p">
              Not a valid referral address
            </div>
          </div>

          <div v-show="showButtons"
               class="mt-8 flex justify-between space-x-2"
          >
            <button v-if="showBtnBind"
                    class="btn-bind"
                    @click="bind"
            >
              {{ $t('Bind') }}
            </button>

            <button class="btn-swap"
                    @click="swap"
            >
              {{ $t('Get_VokenTB') }}
            </button>
          </div>

          <div v-show="!showBtnBind" class="mt-4 flex justify-center font-mono text-sm text-gray-500">
            <p class='w-2/3 leading-7'>{{ $t('Please_set_the_gas_to') }}</p>
          </div>

          <tx-info v-if="showReferralAddress"
                   class="mt-4"
                   :status="txBindStatus"
                   :hash="txBindHash"
                   :confirmation="txBindConfirmation"
                   :message="txBindMessage" />

          <tx-info :class="{'mt-4': showButtons, 'mt-8': !showButtons }"
                   :status="txSwapStatus"
                   :hash="txSwapHash"
                   :confirmation="txSwapConfirmation"
                   :message="txSwapMessage" />
        </div>

        <!--  Payment Event Loaded  -->
        <div v-else class="mt-8">
          <div class="font-mono">
            <div v-if="paymentEther.gt(0)">
              <div class="pi">
                Transaction hash
              </div>
              <div class="mt-2 pr-4 text-sm text-gray-500 text-right">
                <a class="a-tx" target="_blank" :href="paymentTxHref">
                  {{ paymentTxHash }}
                </a>
              </div>

              <div class="mt-4 pi">
                You've sent
              </div>
              <div class="mt-1 pv">
                <span>{{ paymentEther }}</span>
                <span class="text-lg">ETH</span>
              </div>

              <div class="mt-4 pi">
                and got
                ${{ paymentEtherUSDPrice }} x {{ paymentEther }}
                / ${{ paymentVokenUSDPrice }} =
              </div>
              <div class="mt-1 pv">
                <span>{{ vokenIssued.toFixed(3) }}</span>
                <span class="text-lg">VokenTB</span>
              </div>

              <div v-if="vokenBonuses.gt(0)" class="mt-4">
                <div class="pi">
                  {{ $t('and') }} {{ vokenBonusPercent }}% {{ $t('random_bonuses') }}
                </div>

                <div class="mt-1 pv">
                  <span>{{ vokenBonuses.toFixed(3) }}</span>
                  <span class="text-lg">VokenTB</span>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="pi">
                {{ $t('You_ve_already_got') }}
              </div>

              <div class="mt-2 font-bold text-2xl text-indigo-800">
                {{ vokenIssued.toFixed(3) }} VokenTB
              </div>

              <div v-if="vokenBonuses.gt(0)" class="mt-6">
                <div class="pi">
                  {{ $t('and') }} {{ vokenBonusPercent }}% {{ $t('random_bonuses') }}
                </div>

                <div class="mt-2 font-bold text-2xl text-indigo-800">
                  {{ vokenBonuses.toFixed(3) }} VokenTB
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-between space-x-2">
            <nuxt-link :to="localePath('/referral')"
                       class="a-referral-board"
            >
              {{ $t('Go_to_referral_program') }}
            </nuxt-link>
          </div>
        </div>

      </div>
    </layout-for-mobi>
  </layout-bg-a>
</template>

<script>
import BigNumber from 'bignumber.js'
import fn from '~/utils/functions'
import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'
import LayoutForMobi from '~/components/LayoutForMobi'
import LayoutBgA from '~/components/LayoutBgA'
import TxInfo from '~/components/TxInfo'
import LayoutSwitchReferralAddress from '~/components/LayoutSwitchReferralAddress'

export default {
  name: 'Swap',
  components: { LayoutSwitchReferralAddress, TxInfo, LayoutBgA, LayoutForMobi },
  data() {
    return {
      etherAmount: fn.amountDisplay(this.$store.state.status.weiMax, 18),
      showReferralAddress: this.$store.state.accountStatus.referrerVoken.gt(0),
      referralAddress: '',
      vInt: '0',
      referrer: null,

      showButtons: true,

      txBinding: false,

      txBindStatus: -1,
      txBindHash: null,
      txBindConfirmation: 0,
      txBindMessage: null,

      txSwapStatus: -1,
      txSwapHash: null,
      txSwapConfirmation: 0,
      txSwapMessage: null
    }
  },
  async mounted() {
    if (this.$store.state.accountStatus.issued.gt(0)) {
      await this.getPayment()
    } else {
      const cachedKey = 'referralAddress'
      const cachedReferralAddress = nuxtStorage.localStorage.getData(cachedKey)
      if (cachedReferralAddress) {
        this.referralAddress = cachedReferralAddress
      }
    }
  },
  watch: {
    etherAmount() {
      if (this.etherAmount) {
        let etherAmount = (
          this.etherAmount.toString()
            .replace(/[^\d.]/g, '')
            .replace(/\.{2,}/g, '.')
            .replace('.', '#')
            .replace(/\./g, '')
            .replace('#', '.')
            .replace(/^(\d+)\.(\d{0,18}).*$/, '$1.$2')
        )

        if (etherAmount.indexOf('.') < 0 && etherAmount !== '') {
          etherAmount = parseFloat(etherAmount).toString()
        }

        let bn = new BigNumber(etherAmount)

        if (bn.gt(this.etherMax)) {
          this.etherAmount = this.etherMax.toString()
        } else if (bn.gt(0) && bn.lt(this.etherMin)) {
          this.etherAmount = this.etherMin.toString()
        } else if (bn.gt(0)) {
          this.etherAmount = bn.toString()
        }
      }
    },
    async referralAddress() {
      this.vInt = vokenAddress.addressToBN(this.referralAddress).toString()
      if (this.vInt && this.vInt !== '0') {
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
    vokenAmount() {
      return (
        this.$store.state.status.etherUSDPrice
          .multipliedBy(this.etherAmount)
          .div(this.$store.state.status.vokenUSDPrice)
      )
    },
    etherBalance() {
      return fn.amountDisplay(this.$store.state.accountStatus.etherBalance, 18)
    },
    etherMin() {
      return fn.amountDisplay(this.$store.state.status.weiMin, 18)
    },
    etherMax() {
      return fn.amountDisplay(this.$store.state.status.weiMax, 18)
    },
    paymentEther() {
      return fn.amountDisplay(this.$store.state.accountPayment.weiPayment, 18)
    },
    paymentEtherUSDPrice() {
      return fn.amountDisplay(this.$store.state.accountPayment.etherUSDPrice, 6)
    },
    paymentVokenUSDPrice() {
      return (
        this.$store.state.accountPayment.etherUSDPrice
          .div(10 ** 6)
          .multipliedBy(this.$store.state.accountPayment.weiPayment)
          .div(10 ** 18)
          .div(this.$store.state.accountStatus.issued)
          .multipliedBy(10 ** 9)
      )
    },
    paymentTxHash() {
      return (
        this.$store.state.accountPayment.txHash.slice(0, 8)
        +
        '...'
        +
        this.$store.state.accountPayment.txHash.slice(62)
      )
    },
    paymentTxHref() {
      return (
        'https://etherscan.io/tx/'
        +
        this.$store.state.accountPayment.txHash
      )
    },
    vokenIssued() {
      return fn.amountDisplay(this.$store.state.accountStatus.issued, 9)
    },
    vokenBonuses() {
      return fn.amountDisplay(this.$store.state.accountStatus.bonuses, 9)
    },
    vokenBonusPercent() {
      return (
        this.$store.state.accountStatus.bonuses
          .div(this.$store.state.accountStatus.issued)
          .multipliedBy(100)
      )
    },
    referralAddressStatus() {
      if (this.referralAddress) {
        if (this.referralAddress === this.$store.state.accountStatus.vokenAddress) {
          return 'warn'
        }

        if (vokenAddress.isAddress(this.referralAddress)) {
          if (fn.isNotAddress(this.referrer)) {
            return 'warn'
          } else {
            return 'success'
          }
        } else {
          return 'error'
        }
      }
    },
    showBtnBind() {
      return this.showReferralAddress && this.$store.state.accountStatus.referrerVoken.eq(0)
    }
  },
  methods: {
    async getPayment() {
      await this.$store.state
        .earlyBirdContract()
        .getPastEvents(
          'Payment', {
            filter: { account: this.$store.state.account },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onPayment)
    },
    async onPayment(events) {
      if (events.length > 0) {
        const eventPayment = events[0]

        const accountPayment = {
          txHash: eventPayment.transactionHash,
          blockNumber: eventPayment.blockNumber,
          etherUSDPrice: new BigNumber(eventPayment.returnValues.etherUsdPrice),
          weiPayment: new BigNumber(eventPayment.returnValues.weiPayment)
        }

        await this.$store.dispatch('SYNC_ACCOUNT_PAYMENT', accountPayment)
      }
    },
    async bind() {
      this.txBindStatus = -1
      this.txSwapStatus = -1

      if (this.txBinding) {
        this.$toast.error('Binding tx processing...')
        return
      }

      if (this.showReferralAddress && this.referralAddressStatus !== 'success') {
        this.$toast.info('Please enter a valid referral address.')
        this.$refs['referral-address'].focus()
        return
      }

      this.txBindStatus = 0
      this.txBindMessage = null
      this.txBinding = true

      await this.$store
        .state
        .vokenTbContract()
        .methods
        .setReferrer(String(this.vInt))
        .send({ 'from': this.$store.state.account })
        .on('transactionHash', this.onBindTransactionHash)
        .on('receipt', this.onBindReceipt)
        .on('confirmation', this.onBindConfirmation)
        .on('error', this.onBindError)
        .catch(this.onBindError)
    },
    async onBindTransactionHash(txHash) {
      this.txBindStatus = 0
      this.txBindHash = txHash
    },
    async onBindReceipt(receipt) {
      this.txBindMessage = null

      if (receipt.status) {
        this.txBindStatus = 1
      } else {
        this.txBindStatus = 3
      }
    },
    async onBindConfirmation(confirmation) {
      if (this.txBindStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txBindStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txBindStatus = 2
        } else {
          this.txBindStatus = -1
          await this.$store.state.dApp.getStatus()
          await this.$store.state.dApp.getAccountStatus()
        }

        this.txBindConfirmation = confirmation
      }
    },
    async onBindError(error) {
      this.txBindStatus = 3
      this.txBindMessage = error.message
      this.txBinding = false
    },


    async swap() {
      this.txBindStatus = -1
      this.txSwapStatus = -1

      if (
        this.showReferralAddress
        &&
        this.$store.state.accountStatus.referrerVoken.eq(0)
      ) {
        if (this.referralAddressStatus === 'success') {
          this.$toast.info('Please click "Bind" first.')
        } else {
          this.$toast.error('Please bind a valid referral address first.')
          this.$refs['referral-address'].focus()
        }

        return
      }

      this.showButtons = false
      this.txSwapStatus = 0
      this.txSwapMessage = null

      await window.web3
        .eth
        .sendTransaction({
          from: this.$store.state.account,
          to: this.$store.state.earlyBirdContractAddress,
          value: window.web3.utils.toWei(String(this.etherAmount), 'ether'),
          gas: 1000000
        })
        .on('transactionHash', this.onSwapTransactionHash)
        .on('receipt', this.onSwapReceipt)
        .on('confirmation', this.onSwapConfirmation)
        .on('error', this.onSwapError)
        .catch(this.onSwapError)
    },
    async onSwapTransactionHash(txHash) {
      this.txSwapStatus = 0
      this.txSwapHash = txHash
    },
    async onSwapReceipt(receipt) {
      this.txSwapMessage = null

      if (receipt.status) {
        this.txSwapStatus = 1
      } else {
        this.txSwapStatus = 3
      }
    },
    async onSwapConfirmation(confirmation) {
      if (this.txSwapStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txSwapStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txSwapStatus = 2
        } else {
          this.txSwapStatus = -1
          await this.$store.state.dApp.getStatus()
          await this.$store.state.dApp.getAccountStatus()
          await this.getPayment()
        }

        this.txSwapConfirmation = confirmation
      }
    },
    async onSwapError(error) {
      this.txSwapStatus = 3
      this.txSwapMessage = error.message
      this.showButtons = true
    }
  }
}
</script>

<style scoped>
.a-tx {
  @apply px-1 border-b border-blue-500 text-blue-500;
}

.a-tx:hover {
  @apply border-indigo-600 text-indigo-600;
}


.swap {
  @apply py-20;
}

.swap-input {
  @apply block w-full py-3 pl-6 pr-24 bg-white border border-gray-300 rounded-md;
}

.swap-input:focus {
  @apply border-indigo-500 shadow-outline-indigo;
}

.swap-input-referral-address {
  @apply block w-full py-3 px-6 bg-white border border-gray-300 rounded-md;
}

.swap-input-referral-address:focus {
  @apply border-indigo-500 shadow-outline-indigo;
}

.success .swap-input-referral-address {
  @apply bg-green-100 border-green-700 text-green-700;
}

.success .swap-input-referral-address:focus {
  @apply shadow-outline-green;
}

.error .swap-input-referral-address {
  @apply bg-red-100 border-red-700 text-red-700;
}

.error .swap-input-referral-address:focus {
  @apply shadow-outline-red;
}

.success .swap-input-referral-address {
  @apply bg-green-100 border-green-700 text-green-700;
}

.success .swap-input-referral-address:focus {
  @apply shadow-outline-green;
}

.warn .swap-input-referral-address {
  @apply bg-yellow-50 border-yellow-700 text-yellow-700;
}

.warn .swap-input-referral-address:focus {
  @apply shadow-outline-yellow;
}

.swap button {
  @apply w-full py-4 bg-gradient-to-r border border-transparent rounded-md shadow;
  @apply font-sans font-semibold text-xl text-white text-center;
}

.swap button:focus {
  @apply outline-none;
}

.swap button:active {
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
</style>
