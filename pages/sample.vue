<template>
  <div class="font-mono">
    <label for="send"
           class="mt-6 block text-sm font-medium text-gray-700 text-left">
      Send
    </label>

    <div class="mt-1 relative rounded-md shadow-md text-2xl">
      <input type="text"
             name="send"
             id="send"
             class=""
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
  </div>
</template>

<script>
export default {
  name: 'sample'
}
</script>

<style scoped>

</style>
