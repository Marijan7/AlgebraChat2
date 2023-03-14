// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: `${process.env.REACT_APP_API_KEY}`,
      authDomain: "chat-algebra-12183.firebaseapp.com",
      databaseURL:
            "https://chat-algebra-12183-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "chat-algebra-12183",
      storageBucket: "chat-algebra-12183.appspot.com",
      messagingSenderId: "386551702896",
      appId: "1:386551702896:web:2473fec4d3b04f0a099bb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const chatRef = ref(db, "chat");
export const auth = getAuth(app);
export default app;
