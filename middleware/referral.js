import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'


export default async function({ isDev, route, redirect }) {
  const cachedKey = 'referralAddress'

  // // remove invalid cache
  // const cachedReferralAddress = nuxtStorage.localStorage.getData(cachedKey)
  // if (cachedReferralAddress && !vokenAddress.isAddress(cachedReferralAddress)) {
  //   nuxtStorage.localStorage.removeItem(cachedKey)
  // }

  // from route.query
  const referralAddress = route.query.r
  const validReferralAddress = referralAddress ? vokenAddress.isAddress(referralAddress) : false
  if (referralAddress && !validReferralAddress) {
    let query = Object.assign({}, route.query)
    delete query.r
    redirect(route.path, query)
    return null
  }

  // updated cache
  if (validReferralAddress) {
    nuxtStorage.localStorage.setData(cachedKey, referralAddress, 90, 'd')

    if (isDev) {
      console.log('::: cached referralAddress =>', referralAddress)
    }
  }

  // keep tracking
  const cachedReferralAddress = nuxtStorage.localStorage.getData(cachedKey)
  if (cachedReferralAddress && vokenAddress.isAddress(cachedReferralAddress)) {
    if (route.query.r !== cachedReferralAddress) {
      let query = Object.assign({ r: cachedReferralAddress }, route.query)
      redirect(route.path, query)
    }
  }
}
