import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJ7i_CWk5PVLhikeczgxybOSPBHu-meQ",
  authDomain: "tiktok4-fb41a.firebaseapp.com",
  projectId: "tiktok4-fb41a",
  storageBucket: "tiktok4-fb41a.appspot.com",
  messagingSenderId: "110354040281",
  appId: "1:110354040281:web:1f815e673fa1c9137f85c8",
  measurementId: "G-WJFQ4HDXJP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

// Path: kid_tok_4\src\Video.js