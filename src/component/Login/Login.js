import { async } from "@firebase/util";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SigninWith from "../SigninWith/SigninWith";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const errorMesaage = <p style={{ color: "red" }}>{error?.message}</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
    else{
      toast("pleas enter your email");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="my-form container w-25">
      <h2>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          style={{
            textDecoration: "none",
            backgroundColor: "transparent",
            border: "none",
            color: "rgb(0, 160, 0)",
          }}
          className="btn btn-link p-0"
          onClick={resetPassword}
        >
          reset password
        </Button>
        <p>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "rgb(0, 160, 0)" }}
            to={"/register"}
          >
            {" "}
            Register now
          </Link>
        </p>
        <button className="my-btn">submit</button>
        {errorMesaage}
      </Form>
      <SigninWith></SigninWith>
      <ToastContainer />
    </div>
  );
};

export default Login;
