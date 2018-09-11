import {FIREBASE_AUTH,firebase} from '@/plugins/firebase'

export default function ({ route, redirect }) {
  FIREBASE_AUTH.onAuthStateChanged(function(user) {
    if (!user){
       window.location.href = '/login'
    }
    return new Promise((resolve) => {
    })
  });
}
