import {FIREBASE_AUTH} from '@/plugins/firebase'

export default function ({ store, route }) {
  FIREBASE_AUTH.onAuthStateChanged(function(user) {
    if (!user && route.name != 'login'){ // ログインしていない状態でログインページでなければ
      window.location.href = '/login'
    }
    return new Promise((resolve) => {
    })
  });
}
