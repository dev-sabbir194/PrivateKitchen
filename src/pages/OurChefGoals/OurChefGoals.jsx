import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurChefGoals = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://drive.google.com/uc?id=1BK775Q9IE_BErctmdGVXQtYNohYumpkE",
    "https://drive.google.com/uc?id=1ai1-gJHvKmq2lrG3h4TQ7yK0ttzp04vI",
    "https://drive.google.com/uc?id=1MxUGyU9yrCBfyYwS9VKP1edFQYQodJrw",
    "https://drive.google.com/uc?id=1x1m-6mFJtbVkGe5E4xH9fz1rFmG5I13m",
    "https://drive.google.com/uc?id=1Ayv68M1n5TGBlpyWM0T-otp8WFtnGosF",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="our-chef-goals" className="py-5">
      <Container>
        <Row>
          <Col md={6} className="align-self-center text-warning">
            <h2 className="mb-4">Our Chef Goals</h2>
            <p className="lead mb-5">
              An experienced chef is a culinary professional with a wealth of
              knowledge and skills acquired through years of practice in the
              kitchen. They have honed their craft over time and can confidently
              prepare and present a wide range of dishes with precision and
              expertise. Experienced chefs possess an excellent understanding of
              ingredients, cooking techniques, and food safety practices.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <i className="bi bi-check-circle-fill me-3"></i>
                <div>
                  <h5>Master the basics: </h5>
                  <p>
                    Before you can create your own unique dishes, it's essential
                    to have a strong foundation in basic cooking techniques and
                    skills. Make sure you're proficient in everything from knife
                    skills to sauce-making.
                  </p>
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-check-circle-fill me-3"></i>
                <div>
                  <h5>Experiment with new ingredients:</h5>
                  <p>
                    Don't be afraid to try out new ingredients and flavor
                    combinations. This is how you can discover new techniques,
                    ingredients and create new dishes that set you apart from
                    other chefs.
                  </p>
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="bi bi-check-circle-fill me-3"></i>
                <div>
                  <h5>Continually learn: </h5>
                  <p>
                    No matter how long you've been in the industry, there's
                    always something new to learn. Stay up-to-date with industry
                    trends, new techniques, and ingredients by attending
                    workshops, conferences, and culinary schools.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-center">
            {/* <Image
              src="https://picsum.photos/400/400"
              alt="Our Chef Goals Image"
              className="img-fluid rounded-circle mb-4"
            /> */}
            <img
              className=" img-fluid rounded-circle mb-4"
              src={images[currentImage]}
              alt=""
            />
            <h4>Meet Our Chefs</h4>
            <p className="text-muted mb-4">Meet Our Experienced Chef</p>
            <Link to="/chef">
              <button type="button" className="btn btn-info" id="view">
                Meet Our Chefs
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurChefGoals;
