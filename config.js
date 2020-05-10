import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCzVbmhKzl1xRAAoKDjQcEqGdmXyxmpPQw",
  authDomain: "bartersystem-1d8b6.firebaseapp.com",
  databaseURL: "https://bartersystem-1d8b6.firebaseio.com",
  projectId: "bartersystem-1d8b6",
  storageBucket: "bartersystem-1d8b6.appspot.com",
  messagingSenderId: "996440472526",
  appId: "1:996440472526:web:9a4724c8ced4948be7499f",
  measurementId: "G-JEJ1C46EK5"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
