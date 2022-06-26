// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDngCMP5L2PePXYuTloe0Z45IF4lmCZP84",
  authDomain: "hekto-shopping-app.firebaseapp.com",
  projectId: "hekto-shopping-app",
  storageBucket: "hekto-shopping-app.appspot.com",
  messagingSenderId: "182246221819",
  appId: "1:182246221819:web:15fb290fa52fd2b465cd5e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
