import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import './Login.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)
    // console.log(email, password, user, error);
    .then( ()=> {
      navigate(from, {replace: true})
    })
  }
  return (
    <div className="my-form container w-25">
      <h2>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <p>Don't have an account? <Link to={'/register'}> Register now</Link></p>
        <button className="my-btn">submit</button>
      </Form>
    </div>
  );
};

export default Login;
