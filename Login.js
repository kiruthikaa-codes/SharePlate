import React from "react";
import { auth } from "../firebase";

const Login = () => {
  const googleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      alert("Login Successful!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <button onClick={googleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
