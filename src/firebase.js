import firebase from "firebase"

var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAY7iJi_chPirpRkF4TGV7UwtORBzVb9xw",
    authDomain: "portfolio-contactus.firebaseapp.com",
    projectId: "portfolio-contactus",
    storageBucket: "portfolio-contactus.appspot.com",
    messagingSenderId: "295505463246",
    appId: "1:295505463246:web:79fabe6f1e1a99e9b60d9f"
  });

  var db = firebaseApp.firestore();

  export { db };
  
  