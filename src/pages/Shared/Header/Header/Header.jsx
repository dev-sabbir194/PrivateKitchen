import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




const Header = () => {


 const [currentImage, setCurrentImage] = useState(0);
 const images = [
   "https://drive.google.com/uc?id=1hRbD3wYtNxdyqyLuT_zEC3JEBEdSQjL5",
   "https://drive.google.com/uc?id=1U96wL-1E-oIGltQ4rfqgj0aKBAglEVte",
   "https://drive.google.com/uc?id=1nFAOVStSoHp0LM_yWXoo9vhfBb6wqMs6",
   "https://drive.google.com/uc?id=1gCZOCS3rP00Hc3hsvGOWTJoSCZe_47mK",
   "https://drive.google.com/uc?id=1aJsdb-Q7urUMs50KdsYcI8I1p5JgAOdF",
 ];

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentImage((currentImage) => (currentImage + 1) % images.length);
   }, 5000);
   return () => clearInterval(interval);
 }, [images.length]);



  return (
    <div className="mt-5 mb-5">
      {/* banner */}
      <div className="banner container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="banner-title">
              One Step Closer To Your <span id="drem">Fevorite Recipe</span>
            </h2>
            <p className="banner-discription">
              Looking for delicious and easy-to-make recipes? You've come to the
              right place! Our recipe section offers a wide variety of dishes
              that will satisfy your cravings and impress your guests. From
              appetizers to desserts, we've got you covered with step-by-step
              instructions and helpful tips. Whether you're a seasoned cook or
              just starting out, our recipes are sure to inspire you to get
              creative in the kitchen. So grab your apron and let's get cooking!
            </p>
            <Link to="/registration">
              <button className="btn btn-primary" id="strat-button">
                Registration
              </button>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              className=" heder-img h-100 w-100"
              src={images[currentImage]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
