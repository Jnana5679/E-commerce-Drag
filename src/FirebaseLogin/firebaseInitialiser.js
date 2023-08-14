import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCALz-yMyJK3MEr8T90LoC7_c5aztyZV8Q",
  authDomain: "e-commerce-drag.firebaseapp.com",
  projectId: "e-commerce-drag",
  storageBucket: "e-commerce-drag.appspot.com",
  messagingSenderId: "684512852046",
  appId: "1:684512852046:web:8956ad6a8ad9fdbc532b1f",
  measurementId: "G-9B3QYDM2TT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
