import firebase from 'firebase';
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfrvEvTfz2Yg7OhEYi2IiBR1AvlU7etgk",

  authDomain: "simple-messenger-1d007.firebaseapp.com",

  projectId: "simple-messenger-1d007",

  storageBucket: "simple-messenger-1d007.appspot.com",

  messagingSenderId: "239475164976",

  appId: "1:239475164976:web:d434a1531f107d9c8b6af5",

  measurementId: "G-EFG5Y9HVMP"

  });

  const db = firebaseApp.firestore();
  
  export default db; 





  



