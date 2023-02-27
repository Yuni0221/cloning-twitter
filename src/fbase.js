import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyD0eRn1a9EoLKZndl4WLeKUwyC10NNwI",
  authDomain: "cloning-twitter-7826b.firebaseapp.com",
  projectId: "cloning-twitter-7826b",
  storageBucket: "cloning-twitter-7826b.appspot.com",
  messagingSenderId: "124797429627",
  appId: "1:124797429627:web:6dffc6e07584569b453fde",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
