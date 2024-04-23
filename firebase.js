// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPJ_viLnw1i3h9UxCdQABQAbtjwQYzFlc",
  authDomain: "authapp-a403e.firebaseapp.com",
  projectId: "authapp-a403e",
  storageBucket: "authapp-a403e.appspot.com",
  messagingSenderId: "732332271840",
  appId: "1:732332271840:web:90e7f09234d26b403c4885",
  measurementId: "G-FWFCMBHLPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};