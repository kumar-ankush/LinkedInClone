import firebase from 'firebase'; //Inported Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAyXSnp1AjIUI5DZFMx2mEEHF60OO6Zq1M",
    authDomain: "linkedin-react-redux-clone.firebaseapp.com",
    projectId: "linkedin-react-redux-clone",
    storageBucket: "linkedin-react-redux-clone.appspot.com",
    messagingSenderId: "376992874766",
    appId: "1:376992874766:web:20ff362346e71ca451d75f"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig); //Initialized the app
  const db= firebaseApp.firestore(); //Connected with store
  const auth=firebase.auth(); //Authentication
  export {db,auth}; //Exported as we need these two