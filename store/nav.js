export const state = () => ({
  menuMobile: false,
  languageMenu: false,
  flyoutWallet: false
})


export const mutations = {
  SET_MENU_MOBILE(state, value) {
    state.menuMobile = value
  },
  SET_LANGUAGE_MENU(state, value) {
    state.languageMenu = value
  },
  SET_FLYOUT_WALLET(state, value) {
    state.flyoutWallet = value
  }
}


export const actions = {
  TOGGLE_MENU_MOBILE({ commit, state }) {
    commit('SET_MENU_MOBILE', !state.menuMobile)
  },
  TOGGLE_LANGUAGE_MENU({ commit, state }) {
    commit('SET_LANGUAGE_MENU', !state.languageMenu)
  },
  TOGGLE_FLYOUT_WALLET({ commit, state }) {
    commit('SET_FLYOUT_WALLET', !state.flyoutWallet)
  },
  HIDE_ALL({ commit, state}) {
    commit('SET_MENU_MOBILE', false)
    commit('SET_LANGUAGE_MENU', false)
    commit('SET_FLYOUT_WALLET', false)
  }
}
