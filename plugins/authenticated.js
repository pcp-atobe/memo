import {FIREBASE_AUTH} from '@/plugins/firebase'

export default function ({ store, route, redirect }) {
  FIREBASE_AUTH.onAuthStateChanged(function(user) {
    if (!user && route.name != 'login'){ // ログインしていない状態でログインページでなければ
      return redirect('/login')
    }
    return new Promise((resolve) => {
    })
  });
}
