import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {//your config goes here}








firebase.initializeApp(firebaseConfig)

export const storeHandle=firebase.firestore()
