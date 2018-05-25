import * as api from '../api'

export const FETCH_POLOS_SUCCESS = 'termometro/polos/FETCH_POLOS_SUCCESS'
export const IS_FETCHING_POLOS = 'termometro/polos/IS_FETCHING_POLOS'
export const FETCH_POLOS_ERROR = 'termometro/polos/FETCH_POLOS_ERROR'

const state = {
  polos: [],
  isFetchingPolos: false,
  fetchPolosError: false,
  fetchPolosSuccess: false
}

const getters = {
  polos: state => state.polos,
  isFetchingPolos: state => state.isFetchingPolos,
  fetchPolosError: state => state.fetchPolosError,
  fetchPolosSuccess: state => state.fetchPolosSuccess
}

const mutations = {
  [FETCH_POLOS_SUCCESS] (state, polos) {
    state.isFetchingPolos = false
    state.fetchPolosSuccess = true
    state.polos = polos
  },
  [FETCH_POLOS_ERROR] (state) {
    state.isFetchingPolos = false
    state.fetchPolosError = true
  },
  [IS_FETCHING_POLOS] (state) {
    state.isFetchingPolos = true
  }
}

const actions = {
  getPolos ({state, commit, rootState}) {
    api.getPolos().then(
      result => {
        console.log ("result")
        commit(FETCH_POLOS_SUCCESS, result)
      })
      .catch(() => { 
        commit(FETCH_POLOS_ERROR) 
      })
  }
}

export const polosModulo = {
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
}