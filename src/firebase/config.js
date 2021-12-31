import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBj4FjAxOffOmkoVRuZI73OH9Dc8HeGGj8",
    authDomain: "react-ol.firebaseapp.com",
    projectId: "react-ol",
    storageBucket: "react-ol.appspot.com",
    messagingSenderId: "290361276363",
    appId: "1:290361276363:web:b9ba6f73125f9a4c04684e"
  };
   
   export const firebase = firebase.initializeApp(firebaseConfig)