<template>
  <div>
    <hero-set-voken />

    <layout-bg-a theme='RIGHT'>
      <comp-set-voken v-show='vokenAddressNotSet' />

      <div v-show='!vokenAddressNotSet' class='resp-container'>
        <layout-w-prose class='resp-my'>
          <h2>
            You've already set up your VOKEN Address:
          </h2>
        </layout-w-prose>

        <div class='resp-my flex items-end justify-center space-x-4'>
          <vue-avatar class='resp-avatar' :value='vokenAddress' />

          <!-- address -->
          <div class='w-full sm:max-w-xl'>
            <label for='voken-address'></label>
            <div class='relative mt-1'>
              <input type='text'
                     id='voken-address'
                     class='input-indigo w-full py-3 px-4 font-mono text-sm md:text-base text-gray-500'
                     :value='vokenAddress'
                     readonly disabled />
            </div>
          </div>
        </div>
      </div>

      <div class='resp-container'>
        <layout-w-prose class='resp-my'>
          <h3>
            Susitna VOKEN on vnCHAIN Susitna (beta network)
          </h3>

          <p>
            After you set up your VOKEN Address,
            you would receive some Susitna VOKEN on vnCHAIN Susitna (beta network) within 48 hours.
            Meanwhile, you can experience the Proxy ClientBase by using it,
            even send some to your friends.
          </p>

          <h3>
            VOKEN on vnCHAIN main network
          </h3>

          <p>
            The transfer function of VokenTB will not be disabled
            in order to facilitate user transfer, distribution, or trade.
          </p>

          <p>
            Once the main network is online, you can map the ERC20 version of VokenTB
            to the vnCHAIN main network by transferring all or part of your funds to a specific address.
          </p>
        </layout-w-prose>
      </div>
    </layout-bg-a>

  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'
import HeroSetVoken from '~/components/HeroSetVoken'
import CompSetVoken from '~/components/CompSetVoken'

import LayoutWProse from '~/components/LayoutWProse'
import LayoutBgA from '~/components/LayoutBgA'

export default {
  name: 'set-voken',
  middleware: ['dapp'],
  components: { LayoutWProse, LayoutBgA, HeroSetVoken, CompSetVoken, VueAvatar },
  computed: {
    vokenAddressNotSet() {
      return this.$store.state.accountStatus.voken.eq(0)
    },
    vokenAddress() {
      return this.$store.state.accountStatus.vokenAddress
    }
  }
}
</script>

<style scoped>

</style>
