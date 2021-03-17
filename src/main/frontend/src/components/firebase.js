import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB03EsJgZzD4y9zwpI_6cLq2tRQbUuq7mQ",
  authDomain: "woofer-db-ef5c6.firebaseapp.com",
  databaseURL: "https://woofer-db-ef5c6-default-rtdb.firebaseio.com",
  projectId: "woofer-db-ef5c6",
  storageBucket: "woofer-db-ef5c6.appspot.com",
  messagingSenderId: "64142616072",
  appId: "1:64142616072:web:7fda0e5528713f512a13bd",
  measurementId: "G-XZ1YZ2ZG2P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
