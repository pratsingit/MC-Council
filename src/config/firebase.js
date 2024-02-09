import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBOMjfp0XZcBK-Es4V81S5vGfelIM_dX6Q",
  authDomain: "fsdmini-1e6b1.firebaseapp.com",
  projectId: "fsdmini-1e6b1",
  storageBucket: "fsdmini-1e6b1.appspot.com",
  messagingSenderId: "424626274770",
  appId: "1:424626274770:web:ca9a4f1bbbc37fb3e5c80b",
  measurementId: "G-VW47VKB2MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);