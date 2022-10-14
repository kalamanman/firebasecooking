import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {//your config goes here


    apiKey: "AIzaSyDv357a-HNPcJg0H8SMcUG4p05tssYNO8M",

  authDomain: "cooking-ninja-f8812.firebaseapp.com",

  projectId: "cooking-ninja-f8812",

  storageBucket: "cooking-ninja-f8812.appspot.com",

  messagingSenderId: "137314678000",

  appId: "1:137314678000:web:1639230ff3b9d7b36bfe35"

  



}








firebase.initializeApp(firebaseConfig)

export const storeHandle=firebase.firestore()
