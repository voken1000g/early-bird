import BigNumber from 'bignumber.js'
import vokenAddress from '@voken/address'
import vokenTbAbi from './constants/vokenTb.json'
import earlyBirdAbi from './constants/earlyBird.json'

class DApp {
  constructor(state, commit) {
    this._state = state
    this._commit = commit
  }

  async getChainId() {
    await window.web3.eth.getChainId().then(chainId => {
      this._commit('SET_CHAIN_ID', chainId)
    })
  }

  async setContracts() {
    const Contract = window.web3.eth.Contract

    this._commit('SET_VOKEN_TB_CONTRACT', new Contract(vokenTbAbi, this._state.vokenTbContractAddress))
    this._commit('SET_EARLY_BIRD_CONTRACT', new Contract(earlyBirdAbi, this._state.earlyBirdContractAddress))
  }

  async getVokenBalance(account) {
    return await this._state.vokenTbContract().methods.balanceOf(account).call().catch(error => {
      console.error('::: [dApp] getVokenBalance', error)
    })
  }

  async getStatus() {
    await this._state
      .earlyBirdContract()
      .methods
      .status()
      .call()
      .then(payload => {
        let status = {
          vokenCap: new BigNumber(payload.vokenCap),
          vokenTotalSupply: new BigNumber(payload.vokenTotalSupply),

          vokenIssued: new BigNumber(payload.vokenIssued),
          vokenBonuses: new BigNumber(payload.vokenBonuses),
          etherUSDPrice: new BigNumber(payload.etherUSD),
          vokenUSDPrice: new BigNumber(payload.vokenUSD),
          weiMin: new BigNumber(payload.weiMin),
          weiMax: new BigNumber(payload.weiMax)
        }

        this._commit('SET_STATUS', status)
      })
      .catch(error => {
        console.error('::: [dApp] status', error)
      })
  }

  async getAccountStatus() {
    await this._state
      .earlyBirdContract()
      .methods
      .getAccountStatus(this._state.account)
      .call()
      .then(payload => {
        let status = {
          issued: new BigNumber(payload.issued),
          bonuses: new BigNumber(payload.bonuses),
          volume: new BigNumber(payload.volume),

          etherBalance: new BigNumber(payload.etherBalance),
          vokenBalance: new BigNumber(payload.vokenBalance),

          voken: new BigNumber(payload.voken),
          vokenAddress: vokenAddress.fromBNString(payload.voken),
          referrer: payload.referrer,
          referrerVoken: new BigNumber(payload.referrerVoken)
        }

        this._commit('SET_ACCOUNT_STATUS', status)
      })
      .catch(error => {
        console.error('::: [dApp] account status', error)
      })
  }

  async getVoken2Address(vint) {
    await this._state.vokenTbContract().methods.voken2address(vint).call()
      .then(address => {
        console.log('address:', address)
        return address
      })
      .catch(error => {
        console.error('::: [dApp] account status', error)
      })
  }
}

export default DApp
