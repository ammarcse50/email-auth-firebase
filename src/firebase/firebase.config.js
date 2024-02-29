// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvbUW9-ErYAO68Hn2Ws3haMsQ3yBOJ5vw",
  authDomain: "user-email-pass-auth-14a92.firebaseapp.com",
  projectId: "user-email-pass-auth-14a92",
  storageBucket: "user-email-pass-auth-14a92.appspot.com",
  messagingSenderId: "380351261559",
  appId: "1:380351261559:web:712877a07cce2e14b50f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth