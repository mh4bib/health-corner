import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      createUserWithEmailAndPassword(email, password);
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <p>Already have an account? <Link to={'/login'}> Login now</Link></p>
        <button className="my-btn">submit</button>
      </Form>
    </div>
    );
};

export default Register;