// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe0CPrDO-3p3h98KWa282YWamikq3Op-c",
  authDomain: "netflix-55f89.firebaseapp.com",
  projectId: "netflix-55f89",
  storageBucket: "netflix-55f89.appspot.com",
  messagingSenderId: "534574451675",
  appId: "1:534574451675:web:9d24ffc0b2c0559292b5fe",
  measurementId: "G-4MCB53KG7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);