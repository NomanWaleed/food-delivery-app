import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDxTfqmLJajFGX2lJ6rRYKEnZtrRtfopVg",
  authDomain: "backend-with-firebase-b3eed.firebaseapp.com",
  databaseURL: "https://backend-with-firebase-b3eed-default-rtdb.firebaseio.com",
  projectId: "backend-with-firebase-b3eed",
  storageBucket: "backend-with-firebase-b3eed.appspot.com",
  messagingSenderId: "97046337665",
  appId: "1:97046337665:web:342d6fd3bf88f6449e9580"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();