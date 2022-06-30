import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQQzsFaGd8EbWI44MMCkv-cH7uVrp6-C8",
    authDomain: "app-sal-c3881.firebaseapp.com",
    projectId: "app-sal-c3881",
    storageBucket: "app-sal-c3881.appspot.com",
    messagingSenderId: "899559747150",
    appId: "1:899559747150:web:46b9dfb83e9126fb7bdd1f",
    measurementId: "G-LGM1MGT8CQ"
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const db = getFirestore();