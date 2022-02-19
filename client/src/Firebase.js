// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";

import{getAuth,GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged} from 'firebase/auth';

import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoAIFBxDOqcNIYuc--bZtb-5JIzYe6Ick",
    authDomain: "ugahacks7-2707a.firebaseapp.com",
    projectId: "ugahacks7-2707a",
    storageBucket: "ugahacks7-2707a.appspot.com",
    messagingSenderId: "793646266775",
    appId: "1:793646266775:web:e7606dad3f04e38bd32cd2",
    measurementId: "G-JHD9GNMZN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
   signInWithRedirect(auth, provider).then((result) => {
        
    // navigate("/about");

        
    }).catch((error) => {
        console.log("sign in error");
    })


};


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
       // console.log(user);
        // ...
    } else {
        // User is signed out
        // ...
    }
});

