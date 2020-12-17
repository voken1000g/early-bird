// import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import detectEthereumProvider from '@metamask/detect-provider'
import DApp from '../utils/dapp'

export const state = () => ({
  web3Ready: typeof window.ethereum !== 'undefined',
  chainId: null,
  isMainNet: null,
  account: null,

  blockNumber: 0,

  status: {
    vokenCap: new BigNumber(0),
    vokenTotalSupply: new BigNumber(0),

    vokenIssued: new BigNumber(0),
    vokenBonuses: new BigNumber(0),
    etherUSDPrice: new BigNumber(0),
    vokenUSDPrice: new BigNumber(0),

    weiMin: new BigNumber(100000000000000000),
    weiMax: new BigNumber(1000000000000000000)
  },

  accountStatus: {
    issued: new BigNumber(0),
    bonuses: new BigNumber(0),
    volume: new BigNumber(0),
    etherBalance: new BigNumber(0),
    vokenBalance: new BigNumber(0),

    voken: new BigNumber(0),
    vokenAddress: null,
    referrer: null,
    referrerVoken: new BigNumber(0)
  },

  accountPayment: {
    txHash: null,
    blockNumber: 0,
    etherUSDPrice: new BigNumber(0),
    weiPayment: new BigNumber(0)
  },

  swap: {
    referralAddressToVInt: '0',
    vIntToReferrer: ''
  },

  vokenTbContract: null,
  vokenTbContractAddress: '0x1234567a022acaa848E7D6bC351d075dBfa76Dd4',
  earlyBirdContract: null,
  earlyBirdContractAddress: '0x1aaaa06374970dE748130EaccCdd2d0348E834c4',

  dApp: null,

  notForTheAddress: false
})


export const mutations = {
  SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
    state.isMainNet = chainId === 1
  },
  SET_ACCOUNT(state, account) {
    state.account = Web3.utils.toChecksumAddress(account)
  },
  SYNC_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
  },
  SET_DAPP(state, dApp) {
    state.dApp = dApp
  },
  SET_VOKEN_TB_CONTRACT(state, vokenTbContract) {
    state.vokenTbContract = function() {
      return vokenTbContract
    }
  },
  SET_EARLY_BIRD_CONTRACT(state, earlyBirdContract) {
    state.earlyBirdContract = function() {
      return earlyBirdContract
    }
  },

  SET_STATUS(state, status) {
    state.status = status
  },
  SET_ACCOUNT_STATUS(state, status) {
    state.accountStatus = status
  },
  SET_ACCOUNT_PAYMENT(state, accountPayment) {
    state.accountPayment = accountPayment
  }
}


export const actions = {
  async CONNECT_WEB3({ commit, state }) {
    const provider = await detectEthereumProvider()
    if (provider) {
      ethereum.autoRefreshOnNetworkChange = false
      window.web3 = new Web3(window.ethereum)

      await provider
        .request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          commit('SET_ACCOUNT', accounts[0])
          commit('SET_DAPP', new DApp(state, commit))
        })
        .catch(error => {
          this.$toast.error(error.message)
        })
    } else {
      this.$toast.error('Cannot find any web3 provider')
    }
  },
  async SYNC_CHAIN_ID({ commit }, chainId) {
    commit('SET_CHAIN_ID', parseInt(chainId))
  },
  async SYNC_ACCOUNT({ commit }, account) {
    commit('SET_ACCOUNT', account)
  },
  async SYNC_BLOCK_NUMBER({ commit }, blockNumber) {
    commit('SYNC_BLOCK_NUMBER', blockNumber)
  },
  async SYNC_ACCOUNT_PAYMENT({ commit }, accountPayment) {
    commit('SET_ACCOUNT_PAYMENT', accountPayment)
  },
}
