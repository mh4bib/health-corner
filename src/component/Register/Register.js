import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SigninWith from '../SigninWith/SigninWith';


const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const errorMesaage = <p style={{ color: "red" }}>{error?.message}</p>;
    const handleSubmit = event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      createUserWithEmailAndPassword(email, password);
    }
    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <div className="my-form container w-25">
            <h2>Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <p>Already have an account? <Link style={{textDecoration:'none', color:'rgb(0, 160, 0)'}} to={'/login'}> Login now</Link></p>
        <button className="my-btn">submit</button>
        {errorMesaage}
      </Form>
        <SigninWith></SigninWith>
    </div>
    );
};

export default Register;