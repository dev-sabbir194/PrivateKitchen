import React from "react";
import "./Feature.css";

const JobCategory = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-5" id="title">
          Our Chef Feature
        </h3>
        <div className="row jobs-container mt-5 mb-5">
          <div className="col-md-6 col-lg skill mt-2 ms-2">
            <img
              className="mt-3 mb-5"
              src="https://drive.google.com/uc?id=1ssBYXqHMkUp6JN4kgpiwpXEn1tLPZiry"
              alt=""
            />
            <h5 className="job-title text-white">
              Culinary expertise in various cooking styles and techniques.
            </h5>
            <p className="job-description text-white">
              Ability to Work Under Pressure
            </p>
          </div>

          <div className="col-md-6 col-lg skill mt-2 ms-2">
            <img
              className="mt-3 mb-5"
              src="https://drive.google.com/uc?id=1gSk1YZZ6yT-aXtEbfC3lfCeSfB1u0REY"
              alt=""
            />
            <h5 className="job-title text-white">
              Creativity in developing unique and delicious dishes.
            </h5>
            <p className="job-description text-white">
              Expertise in Culinary Arts
            </p>
          </div>

          <div className="col-md-6 col-lg skill mt-2 ms-2">
            <img
              className="mt-3 mb-5"
              src="https://drive.google.com/uc?id=1OpKrtmS3SzcXkluDXD_yMa1016exbSgv"
              alt=""
            />
            <h5 className="job-title text-white">
              Ability to manage a kitchen team and oversee food service.
            </h5>
            <p className="job-description text-white">
              Creative and Innovative
            </p>
          </div>

          <div className="col-md-6 col-lg skill mt-2 ms-2">
            <img
              className="mt-3 mb-5"
              src="https://drive.google.com/uc?id=1BDjKGE3FZUEzovwTRaxq93VXr6-mpPaG"
              alt=""
            />
            <h5 className="job-title text-white">
              Attention to detail in presentation and plating of dishes.
            </h5>
            <p className="job-description text-white">Attention to Detail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
