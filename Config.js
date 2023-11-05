// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpwuVlkNPcX3155rCw8GLmP6JQ74hwL-o",
  authDomain: "virtu-drive.firebaseapp.com",
  projectId: "virtu-drive",
  storageBucket: "virtu-drive.appspot.com",
  messagingSenderId: "857696968889",
  appId: "1:857696968889:web:b29eac98557a10ae7e7b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };