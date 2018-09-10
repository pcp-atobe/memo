import {FIREBASE_AUTH,firebase} from '@/plugins/firebase'

export default function ({ store, route, redirect }) {
  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
  });
}
