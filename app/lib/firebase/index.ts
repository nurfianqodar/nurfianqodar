import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// DOCS https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.FB_API_KEY,
  authDomain: import.meta.env.FB_AUTH_DOMAIN,
  projectId: import.meta.env.FB_PROJECT_ID,
  storageBucket: import.meta.env.FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.FB_APP_ID,
  measurementId: import.meta.env.FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
