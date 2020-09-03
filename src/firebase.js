import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoD2iWyoFRVfd7hAKYHE0EO7D-EHzL5cA",
    authDomain: "tinder-clone-ac1be.firebaseapp.com",
    databaseURL: "https://tinder-clone-ac1be.firebaseio.com",
    projectId: "tinder-clone-ac1be",
    storageBucket: "tinder-clone-ac1be.appspot.com",
    messagingSenderId: "160753672030",
    appId: "1:160753672030:web:d7fc72f4654837fb19b9cf",
    measurementId: "G-D0FTRQ0SXC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();


  export default database;