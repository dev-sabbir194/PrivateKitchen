import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark py-3">
        <div className="container">
          <div className="row details-container">
            <div className="col-md-6 col-lg detail">
              <h3 className="brand-title text-white">Private Kitchen</h3>
              <p className="skill-description text-white">
                Are you ready to take the next step to meet your Fevorite chef?
              </p>
            </div>
            <div className="col-md-6 col-lg detail">
              <h5 className="link-title">Our Site view</h5>
              <a href="#">Home</a>
              <br />
              <a href="#">Chef</a>
              <br />
              <a href="#">Our chef Goal</a>
              <br />
              <a href="#">All recipes</a>
            </div>
            <div className="col-md-6 col-lg detail">
              <h5 className="link-title">Product</h5>
              <a href="#">Prototype</a>
              <br />
              <a href="#">Plans & Pricing</a>
              <br />
              <a href="#">Customers</a>
              <br />
              <a href="#">Integrations</a>
            </div>
            <div className="col-md-6 col-lg detail">
              <h5 className="link-title">Support</h5>
              <a href="#">Help Desk</a>
              <br />
              <a href="#">Sales</a>
              <br />
              <a href="#">Become a Partner</a>
              <br />
              <a href="#">Developers</a>
            </div>
            <div className="col-md-6 col-lg detail">
              <h5 className="link-title">Contact</h5>
              <p className="adress">524 Broadway , NYC</p>
              <p className="adress">+1 777 - 978 - 5570</p>
            </div>
            <hr id="hr" />

            <div className="d-flex justify-content-between">
              <p className="copyright">
                @2023Private Kitchen. All Rights Reserved
              </p>
              <p className="copyright">Powered by Private Kitchen</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
