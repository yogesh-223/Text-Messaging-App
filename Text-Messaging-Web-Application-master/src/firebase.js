import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyB_7CEOfjOmGDMPfiL4DlZ5gtCOOW8TsdU",
  authDomain: "what-s-app-clone-14798.firebaseapp.com",
  projectId: "what-s-app-clone-14798",
  storageBucket: "what-s-app-clone-14798.appspot.com",
  messagingSenderId: "669912613169",
  appId: "1:669912613169:web:51dc7f559233bffaaa3010",
  measurementId: "G-61R71CDSDS"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
