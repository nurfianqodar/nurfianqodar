import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// DOCS https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.FB_API_KEY,
  authDomain: import.meta.env.FB_API_KEY,
  projectId: import.meta.env.FB_API_KEY,
  storageBucket: import.meta.env.FB_API_KEY,
  messagingSenderId: import.meta.env.FB_API_KEY,
  appId: import.meta.env.FB_API_KEY,
  measurementId: import.meta.env.FB_API_KEY,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
