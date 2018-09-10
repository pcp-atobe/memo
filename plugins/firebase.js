import firebase from 'firebase'
import 'firebase/storage'

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

const FIREBASE_DB = firebase.database()
const FIREBASE_AUTH = firebase.auth()
const FIREBASE_STORAGE = firebase.storage()

export { FIREBASE_DB, FIREBASE_AUTH, FIREBASE_STORAGE, firebase }
