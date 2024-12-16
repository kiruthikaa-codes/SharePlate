import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();


const googleSignIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    console.log("User signed in successfully!");
  } catch (error) {
    console.error("Error during Google Sign-In:", error.message);
  }
};
