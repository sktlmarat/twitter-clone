import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAR55E23NheJ9Qa4K8TjG2nEy-KyYidc8I",
  authDomain: "twitter-clone-bc0fd.firebaseapp.com",
  projectId: "twitter-clone-bc0fd",
  storageBucket: "twitter-clone-bc0fd.appspot.com",
  messagingSenderId: "300732725284",
  appId: "1:300732725284:web:0755cd86ff8d83e903c0b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

export default db
