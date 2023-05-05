import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Recipe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch("https://assignment-10-server-dev-sabbir194.vercel.app/recipe")
      .then((response) => response.json())
      .then((data) => setRecipe(data[0].recipes[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section id="recipe-details" className="py-5">
      <Container>
        <Row>
          <Col md={6} className="align-self-center text-warning">
            <h2 className="mb-4">
              Recipe Name: <span>{recipe.recipeName}</span>
            </h2>
            <p className="lead mb-5">
              {" "}
              Description: <span>{recipe.shortDescription}</span>
            </p>
            <ul className="list-unstyled">
              <h2>Ingredients:</h2>
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Cookingmethod:</h2>
            <p>{recipe.cookingmethod}</p>
          </Col>
          <Col md={6} className="text-center">
            <img
              className=" img-fluid rounded-circle mb-4"
              src={recipe.image}
              alt=""
            />
            <div className="text-warning">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <h4>Recipe Image</h4>
            <p className="text-muted mb-4">
              ChefName : <span>{recipe.chefName}</span>
            </p>
            <Link to="/chef">
              <button type="button" className="btn btn-info" id="view">
                {" "}
                Veiw Chef
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Recipe;
