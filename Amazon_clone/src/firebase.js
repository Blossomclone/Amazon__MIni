import firebase from 'C:/Users/User/Desktop/Portfolio/online-shopping/node_modules/firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = firebase.authDomain();

  export { db, auth }; 