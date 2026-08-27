import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7qRxCzTQbVyXpbACb_b1uGBegOBL1i7k",
  authDomain: "relawan-web.firebaseapp.com",
  projectId: "relawan-web",
  storageBucket: "relawan-web.firebasestorage.app",
  messagingSenderId: "234796036062",
  appId: "1:234796036062:web:2e768a0cd3c22b8e5f374f",
  measurementId: "G-YY7F8F0VH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Enable Offline Persistence (Sangat penting untuk aplikasi kebencanaan)
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
        console.warn("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
    } else if (err.code == 'unimplemented') {
        console.warn("The current browser does not support all of the features required to enable persistence");
    }
  });

export { app, db, auth };
