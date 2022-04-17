import React from "react";
import "./SigninWith.css";
import google from "../../google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SigninWith = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const errorMesaage = <p style={{ color: "red" }}>{error?.message}</p>;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p>or</p>
      {errorMesaage}
      <button onClick={() => signInWithGoogle()} className="google-signin">
        sign in with <img className="mb-1" src={google} alt="" />
        OOGLE
      </button>
    </div>
  );
};

export default SigninWith;
