import {FIREBASE_AUTH, firebase} from '@/plugins/firebase'
export const strict = false

export const state = () => ({
  CURRENT_USER: null,
})

export const mutations = {
  setUser (state, payload) {
    state.CURRENT_USER = payload
  }
}

export const actions = {
}

export const getters = {
  isAuthenticated (state) {
    return !!state.CURRENT_USER
  }
}
