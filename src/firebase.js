import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDW7jAe1fdUnEvTNc-w3tv71QRyGV3qJks",
    authDomain: "netflix-clone-ea6e5.firebaseapp.com",
    projectId: "netflix-clone-ea6e5",
    storageBucket: "netflix-clone-ea6e5.appspot.com",
    messagingSenderId: "695328817081",
    appId: "1:695328817081:web:7ee1729b7657feab064068",
    measurementId: "G-NST0ET3YS6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  