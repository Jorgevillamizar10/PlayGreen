// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADrYFeEskCZDwx5kdWqjDonE2rCJlcTFo",
  authDomain: "play-green-auth.firebaseapp.com",
  projectId: "play-green-auth",
  storageBucket: "play-green-auth.appspot.com",
  messagingSenderId: "700232416754",
  appId: "1:700232416754:web:9bb6b72ea81b83df563f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

export const db = getFirestore(app)