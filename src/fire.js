import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrDlnuM8_ESMbgI1kO9D7hGbWTzSPX77Y",
  authDomain: "login-c4fa1.firebaseapp.com",
  projectId: "login-c4fa1",
  storageBucket: "login-c4fa1.appspot.com",
  messagingSenderId: "829956291175",
  appId: "1:829956291175:web:86ee33caf628817dbff2c2",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
