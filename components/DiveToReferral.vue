<template>
  <div class="relative">
    <div class="absolute inset-0 flex flex-col" aria-hidden="true">
      <div class="flex-1 bg-gray-50"></div>
      <div class="flex-1"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">
                  {{ $t('referral.Ready_to_dive_in_') }}
                </span>
              <span class="block text-red-900">
                  {{ $t('referral.Join_the_referral_program_today') }}
                </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-orange-50">
              {{ $t('referral.Tell_a_friend_about__') }}
            </p>
            <div class="mt-8">
              <nuxt-link :to="localePath('/referral')" class="a-visit-referral">
                {{ $t('referral.Visit_Referral_System') }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiveToReferral'
}
</script>

<style scoped>
.a-visit-referral {
  @apply bg-orange-100 border border-transparent rounded-md shadow py-3 px-6;
  @apply inline-flex items-center;
  @apply text-base font-medium text-red-600;
}

.a-visit-referral:hover {
  @apply bg-orange-200 text-red-500;
}
</style>
