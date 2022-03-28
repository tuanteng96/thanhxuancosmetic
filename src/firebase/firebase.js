import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCaqsBLmJXmbLmPLTriAC-vO05jUyQA7t0",
    authDomain: "thanhxuancosmetic-e15db.firebaseapp.com",
    projectId: "thanhxuancosmetic-e15db",
    storageBucket: "thanhxuancosmetic-e15db.appspot.com",
    messagingSenderId: "66451996841",
    appId: "1:66451996841:web:c8df4321e58d186630a9b8",
    measurementId: "G-71ZG0QKB8S"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };