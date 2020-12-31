export const state = () => ({
  menuMobile: false,
  languageMenu: false,
  flyoutWallet: false
})


export const mutations = {
  TOGGLE_MENU_MOBILE(state) {
    state.menuMobile = !state.menuMobile
  },
  TOGGLE_LANGUAGE_MENU(state) {
    state.languageMenu = !state.languageMenu
  },
  TOGGLE_FLYOUT_WALLET(state) {
    state.flyoutWallet = !state.flyoutWallet
  },
  HIDE_ALL(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = false
  },
}


export const actions = {
  TOGGLE_MENU_MOBILE({ commit }) {
    commit('TOGGLE_MENU_MOBILE')
  },
  TOGGLE_LANGUAGE_MENU({ commit }) {
    commit('TOGGLE_LANGUAGE_MENU')
  },
  TOGGLE_FLYOUT_WALLET({ commit }) {
    commit('TOGGLE_FLYOUT_WALLET')
  },
  HIDE_ALL({ commit }) {
    commit('HIDE_ALL')
  }
}
