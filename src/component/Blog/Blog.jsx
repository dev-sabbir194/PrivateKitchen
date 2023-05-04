import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { savePDF } from "@progress/kendo-react-pdf";

const BlogPage = () => {
  const handleClick = () => {
    const element = document.getElementById("blog-page");
    savePDF(element, { paperSize: "A4" });
  };

  return (
    <div className="container bg-success mb-5 pb-5" id="blog-page">
      <div className="row">
        <div className="col-12">
          <h1>
            <i className="fas fa-pencil-alt mr-3"></i>Blog Page
          </h1>
          <hr />
          <div className="mb-3">
            <h3>Uncontrolled vs Controlled Components</h3>
            <p>
              Uncontrolled components are form inputs that manage their own
              state internally. This means that the data is handled by the DOM
              itself. Controlled components, on the other hand, are form inputs
              that are controlled by React. They use a value prop and an
              onChange event handler to update the state of the component.
            </p>
          </div>
          <div className="mb-3">
            <h3>Validating React Props with PropTypes</h3>
            <p>
              PropTypes is a type-checking library for React props. It helps to
              ensure that the props passed to a component are of the expected
              type. To use PropTypes, you need to import it from the
              'prop-types' package and then define the expected types for your
              props. PropTypes will then throw a warning in the console if the
              type of the prop passed to the component does not match the
              expected type.
            </p>
          </div>
          <div className="mb-3">
            <h3>Difference Between Node.js and Express.js</h3>
            <p>
              Node.js is a JavaScript runtime environment that allows you to run
              JavaScript code on the server-side. Express.js, on the other hand,
              is a web application framework for Node.js. It provides a set of
              tools and features for building web applications and APIs using
              Node.js.
            </p>
          </div>
          <div className="mb-3">
            <h3>Custom Hooks in React</h3>
            <p>
              A custom hook is a JavaScript function that starts with the word
              "use". It allows you to extract reusable logic from a component
              and share it between multiple components. You can create a custom
              hook for any piece of logic that you want to reuse, such as
              handling form data, fetching data from an API, or handling
              animations.
            </p>
          </div>
          <button className="btn btn-primary" onClick={handleClick}>
            <i className="fas fa-download mr-2"></i>Download Blog as PDF
          </button>
          <Link to="/" className="btn btn-secondary ml-3">
            <i className="fas fa-arrow-left mr-2"></i>Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPage;
