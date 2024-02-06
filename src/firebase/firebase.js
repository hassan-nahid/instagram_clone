import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBE0Di8FCPkQmPmiulWLFpjzMuKwAuc6vI",
    authDomain: "instagram-by-nahid.firebaseapp.com",
    projectId: "instagram-by-nahid",
    storageBucket: "instagram-by-nahid.appspot.com",
    messagingSenderId: "403475140926",
    appId: "1:403475140926:web:ce5806c4f8dd5d9b769c6f",
    measurementId: "G-FKE4L29FJW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };


