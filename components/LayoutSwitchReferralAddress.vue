<template>
  <div class="flex items-center space-x-4 text-sm">
    <button :class="{ 'bg-indigo-600': toggleOn, 'bg-indigo-200': !toggleOn }"
            @click="toggle"
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
    >
      <span :class="{ 'translate-x-5': toggleOn, 'translate-x-0': !toggleOn }"
            class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200">

        <span :class="{ 'opacity-0 ease-out duration-100': toggleOn, 'opacity-100 ease-in duration-200': !toggleOn }"
              class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </span>

        <span :class="{ 'opacity-100 ease-in duration-200': toggleOn, 'opacity-0 ease-out duration-100': !toggleOn }"
              class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
          <svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
          </svg>
        </span>
      </span>
    </button>

    <span v-show="isOn && $slots.textOn" class="text-indigo-700 font-bold">
      <slot name="textOn"></slot>
    </span>

    <span v-show="!isOn && $slots.textOff" class="text-indigo-500">
      <slot name="textOff"></slot>
    </span>
  </div>
</template>

<script>
import vokenAddress from '@voken/address'

export default {
  name: 'LayoutSwitchReferralAddress',
  props: {
    isOn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggleOn: this.isOn
    }
  },
  methods: {
    toggle() {
      if (this.$store.state.accountStatus.referrerVoken.eq(0)) {
        this.toggleOn = !this.toggleOn
        this.$emit('update:isOn', this.toggleOn)
      } else {
        this.toggleOn = true
        this.$emit('update:isOn', true)

        this.$toast.info('Already bound with: ' + vokenAddress.fromBNString(this.$store.state.accountStatus.referrerVoken.toFixed(0)))
      }
    }
  }
}
</script>
