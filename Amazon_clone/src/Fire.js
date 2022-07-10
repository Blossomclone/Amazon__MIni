import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDP7KP0B3eFSq2oFQ40d85sWo0dOIvnN5A",
    authDomain: "e-commerce-31e3c.firebaseapp.com",
    projectId: "e-commerce-31e3c",
    storageBucket: "e-commerce-31e3c.appspot.com",
    messagingSenderId: "537009995428",
    appId: "1:537009995428:web:85090a206af7840c44f031",
    measurementId: "G-YPH2VSB9V9"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 
  export default firebase