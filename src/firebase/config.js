import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoSA1K_Tk9j7VUuHlER7GCxMSoi4MUrGs",
    authDomain: "fir-c8a5f.firebaseapp.com",
    projectId: "fir-c8a5f",
    storageBucket: "fir-c8a5f.appspot.com",
    messagingSenderId: "534257503982",
    appId: "1:534257503982:web:d79c8d2ac710ea9495adff",
    measurementId: "G-GP88XX1J4M"
  };


 export default firebase.initializeApp(firebaseConfig)