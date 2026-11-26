
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBYBoEQoMrrEJjMDNQxtgAw6QM2cIWBQk",
  authDomain: "komol-dashboard.firebaseapp.com",
  projectId: "komol-dashboard",
  storageBucket: "komol-dashboard.firebasestorage.app",
  messagingSenderId: "813270519699",
  appId: "1:813270519699:web:c8515221426444cec9a266",
  measurementId: "G-V64NENP7C3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc
};
