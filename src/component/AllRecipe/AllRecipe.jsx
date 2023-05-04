import React, { useState, useEffect } from "react";
import "./AllRecipe.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../../pages/Shared/Header/Header/Header";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-dev-sabbir194.vercel.app/recipe")
      .then((response) => response.json())
      .then((data) => setRecipes(data.allRecipe))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-body">
      <Header></Header>
      <div className="container mb-5">
        <h3 className="text-center mt-5" id="title">
          All Recipes
        </h3>
        <p className="text-center mb-5" id="description">
          Looking for delicious and easy-to-make recipes? You've come to the
          right place! Our recipe section offers a wide variety of dishes that
          will satisfy your cravings and impress your guests. From appetizers to
          desserts, we've got you covered with step-by-step instructions and
          helpful tips. Whether you're a seasoned cook or just starting out, our
          recipes are sure to inspire you to get creative in the kitchen. So
          grab your apron and let's get cooking!
        </p>
        <div className="row">
          {recipes.map((chef) =>
            chef.recipes.map((recipe) => (
              <div
                className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2"
                key={recipe.id}
              >
                <div className="card h-100">
                  <img
                    src={recipe.image}
                    className="w-50 h-50"
                    alt={`Logo ${recipe.id}`}
                    id="images"
                  />
                  <div className="card-body text-center" id="card">
                    <h3 className="card-text text-center">
                      {recipe.recipeName}
                    </h3>

                    <h4>{recipe.shortDescription}</h4>

                    <ul>
                      <h3 className="ulH">Ingredient:</h3>
                      {recipe.ingredients.map((ingredient) => (
                        <li className="ingred">{ingredient}</li>
                      ))}
                    </ul>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          id="chefProfile"
                          src={recipe.chefProfile}
                          alt=""
                          height="50"
                          width="50"
                        />
                        <span className="ms-3">{recipe.chefName}</span>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>

                    <Link to="/">
                      <button type="button" className="btn btn-info" id="view">
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRecipe;
