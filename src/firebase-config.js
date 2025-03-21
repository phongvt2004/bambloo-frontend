import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

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
const storage = getStorage(app);
const auth = getAuth(app);
export {storage, auth};