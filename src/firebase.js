// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCJ97Ibj_Q-9S9jIQ9TQ1lj5FxBCQE1Y1Q",
  authDomain: "tik-tok-clone-c0a01.firebaseapp.com",
  projectId: "tik-tok-clone-c0a01",
  storageBucket: "tik-tok-clone-c0a01.appspot.com",
  messagingSenderId: "475337594097",
  appId: "1:475337594097:web:9764a8b31490191bc6c550",
  measurementId: "G-6Z66LJRG9F"
};
const firebaseapp= firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
export default db;