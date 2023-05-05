import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import app from "../../../utils/firebase/firebase.init";
import "./Registration.css";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const [googleError, setGoogleError] = useState("");
  const [githubError, setGithubError] = useState("");
 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.updateProfile({
          displayName: name,
          photoURL: photoURL,
        });
      }
    });

    return () => unsubscribe();
  }, [auth, name, photoURL]);



  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      toast.error("Password should be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Remove previous photo URL from local storage
      localStorage.removeItem("photoUrl");

      // Save email, password, and photo URL to local storage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("photoUrl", photoURL);

      toast.success("Registration successful!");
      window.location.replace("/home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use. Please use a different email.");
        toast.error("Email already in use. Please use a different email.");
      } else {
        setError(error.message);
        toast.error(error.message);
      }
    }
  };





  return (
    <div className="Registration mb-5">
      <Container className="card-body pb-5">
        <h1 className="text-center mt-5 mb-3">Register</h1>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <Form onSubmit={handleRegistration}>
              {error && <div className="alert alert-danger">{error}</div>}
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhotoURL">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  className="input-field mb-3"
                  type="url"
                  placeholder="Enter photo URL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mt-2 submit-button"
                id="submit-button"
                type="submit"
                block
              >
                Register
              </Button>
            </Form>

            <p className="text-center mt-5">
              Already have acccount?
              <span>
                <Link to="/login">Login Now</Link>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
