import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKXJpyRF4RbKoPXkiGwHFUgLZQk1M_jo4",
    authDomain: "bambloo-357609.firebaseapp.com",
    projectId: "bambloo-357609",
    storageBucket: "bambloo-357609.appspot.com",
    messagingSenderId: "378372494398",
    appId: "1:378372494398:web:0660d2b36ac8afde17ed6f",
    measurementId: "G-FLXRFDJRFV"
    };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);