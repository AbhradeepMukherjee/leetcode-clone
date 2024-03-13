import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKTJoGWLuc0ijqvmBxVZdm4_iokbhl6V4",
  authDomain: "leetcode-clone-95ad8-1b127.firebaseapp.com",
  projectId: "leetcode-clone-95ad8",
  storageBucket: "leetcode-clone-95ad8.appspot.com",
  messagingSenderId: "141109182469",
  appId: "1:141109182469:web:73e8463e83ff01d04a5c6c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const firestore = getFirestore(app);