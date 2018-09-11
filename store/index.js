import {FIREBASE_AUTH, firebase,provider} from '@/plugins/firebase'
export const strict = false

export const state = () => ({
  CURRENT_USER_ID: null
})

export const mutations = {
  setUserID (state, payload) {
    state.CURRENT_USER_ID = payload
  }
}

export const actions = {
  doLogin ({commit}) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      commit('setUserID',result.user.uid)
      window.location.href = '/'
    }).catch(function(error) {});
  }
}
