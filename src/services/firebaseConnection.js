import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBy4aC1VibrXGTFXRmtHrGb23AZ4QeMSkU",
    authDomain: "appfinancas-52c92.firebaseapp.com",
    databaseURL: "https://appfinancas-52c92.firebaseio.com",
    projectId: "appfinancas-52c92",
    storageBucket: "appfinancas-52c92.appspot.com",
    messagingSenderId: "611917252251",
    appId: "1:611917252251:web:62e3c08d1e4f8d0d61e83e",
    measurementId: "G-0WBC7V8FGQ"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;