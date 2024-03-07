// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu72jVwgzRF4UDKJnc2yJu3nXwRFGo1UE",
  authDomain: "flavorharbor-3f0f9.firebaseapp.com",
  projectId: "flavorharbor-3f0f9",
  storageBucket: "flavorharbor-3f0f9.appspot.com",
  messagingSenderId: "327958294565",
  appId: "1:327958294565:web:a9316dacd5df3a65354fcc",
  measurementId: "G-W2BPFSD03C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
