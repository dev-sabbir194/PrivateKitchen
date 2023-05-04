import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mb-5 bg-danger">
      <h1 className="text-center mt-5 mb-4">404 - Page not found</h1>
      <div className="d-flex justify-content-center mb-4">
        <img
          src="https://drive.google.com/uc?id=1Wby-idKvJ8Jkh5VtCSzBkhTqV9dHM-Un"
          alt=""
          className="img-fluid w-100 h-100"
        />
      </div>
      <p className="text-center mb-4">
        The page you are looking for does not exist.
      </p>
      <div className="d-flex justify-content-center">
        <Link to="/" className="btn btn-primary mb-5">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
