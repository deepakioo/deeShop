
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyC2ClhSJpbfxoSKj_bCmj8GpbifoIjf_kI",
    authDomain: "vue-shop-db7a8.firebaseapp.com",
    projectId: "vue-shop-db7a8",
    storageBucket: "vue-shop-db7a8.appspot.com",
    messagingSenderId: "745349912873",
    appId: "1:745349912873:web:87a51d91a7f9583156bf38",
    measurementId: "G-HVXZZ3RV06"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();