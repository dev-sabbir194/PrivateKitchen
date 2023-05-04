import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import app from "../../../utils/firebase/firebase.init";
import "./Login.css";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged in successfully!");
        saveUserCredentials(user.email, "");
        window.location.replace("/home");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged in successfully!");
        saveUserCredentials(user.email, "");
        window.location.replace("/home");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      toast.success("Logged in successfully!");
      saveUserCredentials(email, password);
      window.location.replace("/home");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("Email not registered");
        // Redirect to registration page
        window.location.replace("/registration");
      } else {
        toast.error("Invalid email or password");
      }
    });
};

  const saveUserCredentials = (email, password) => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
  };

  const retrieveUserCredentials = () => {
    const email = localStorage.getItem("userEmail");
    const password = localStorage.getItem("userPassword");
    return { email, password };
  };

  const { email, password } = retrieveUserCredentials();

  return (
    <div>
      <ToastContainer />
      <Container fluid>
        <Row className="text-white mb-2">
          <Col md={{ span: 4, offset: 4 }} className="mt-5 pb-5" id="card-body">
            <h1 className="text-center text-white mb-3">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  defaultValue={email}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input-field"
                  type="password"
                  name="password"
                  placeholder="Password"
                  defaultValue={password}
                />
              </Form.Group>

              <Button
                className="mt-3  ps-5 pe-5 submit-button text-center"
                id="submit-button"
                type="submit"
                block
              >
                Submit
              </Button>
            </Form>
            <div className="mt-3 d-flex gap-1 justify-content-center">
              <Button
                className="mr-2 submit-button"
                onClick={handleSignInWithGoogle}
              >
                Sign in with Google
              </Button>
              <Button
                className="mr-2 submit-button "
                onClick={handleSignInWithGithub}
              >
                Sign in with Github
              </Button>
            </div>
            <p className="text-center mt-5">
              Don't have acccount?
              <span>
                <Link to="/registration">Register Now</Link>
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
