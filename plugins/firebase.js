import firebase from 'firebase'
import { mapMutations } from 'vuex'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
      databaseURL: process.env.DATABASEURL,
      projectId: process.env.PROJECTID,
      storageBucket: process.env.STORAGEBUCKET,
      messagingSenderId: process.env.MESSAGINGSENDERID
    }
  )
}

const provider = new firebase.auth.GoogleAuthProvider();
const FIREBASE_DB = firebase.database()
const FIREBASE_AUTH = firebase.auth()
const user = firebase.auth().currentUser

export { FIREBASE_DB, FIREBASE_AUTH, firebase ,provider}
