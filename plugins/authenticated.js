import firebase from '@/plugins/firebase'

export default function ({ store, route }) {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      store.commit('setUser',user)
    }else{
      store.commit('setUser',null)
    }
  })
}
