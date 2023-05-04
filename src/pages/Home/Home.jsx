import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";



const Home = () => {
  const [numOfCardsToShow, setNumOfCardsToShow] = useState(6);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch(
        `https://assignment-10-server-dev-sabbir194.vercel.app/chefdata?category=${category}`
      )
        .then((response) => response.json())
        .then((data) => setFilteredJobData(data))
        .catch((error) => console.log(error));
    } else {
      fetch("https://assignment-10-server-dev-sabbir194.vercel.app/chefdata")
        .then((response) => response.json())
        .then((data) => setFilteredJobData(data))
        .catch((error) => console.log(error));
    }
  }, [category]);

  const showMoreCards = () => {
    setNumOfCardsToShow(12);
  };






  const handleLikeClick = (chefId) => {
    fetch(
      `https://assignment-10-server-dev-sabbir194.vercel.app/chefdata/${chefId}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedChef = data;
        const updatedJobData = filteredJobData.map((chef) => {
          if (chef.id === updatedChef.id) {
            return updatedChef;
          } else {
            return chef;
          }
        });
        setFilteredJobData(updatedJobData);
        toast.success("Successfully added like!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error adding like!");
      });
  };


  
  return (
    <div className="home-body">
      <div className="container mb-5">
        <h3 className="text-center mt-5" id="title">
          Our Chef
        </h3>
        <p className="text-center mb-5" id="description">
          Explore unique flavors and innovative techniques from our diverse
          range of chefs. Whether you're looking for a personal chef, catering
          for events, or cooking classes, our platform connects you with top
          culinary experts worldwide. Join our community of food enthusiasts and
          embark on a delicious journey today!
        </p>
        <div className="row">
          {filteredJobData.slice(0, numOfCardsToShow).map((card, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2" key={index}>
              <div className="card h-100">
                <img
                  src={card.chefPicture}
                  className="w-50 h-50"
                  alt={`Logo ${index + 1}`}
                  id="images"
                />
                <div className="card-body text-center" id="card">
                  <h3 className="card-text text-center">{card.chefName}</h3>
                  <div className="d-flex justify-content-between">
                    <h4>
                      Experience: <span>{card.yearsOfExperience}</span>
                       <span className="ms-2">Years</span>
                    </h4>
                    <h4>
                      Recipes: <span>{card.numberOfRecipes}</span>
                    </h4>
                  </div>
                  <div className="d-flex gap-3 mt-2">
                    <p className="location">
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="ms-3">{card.likes}</span>
                    </p>
                  
                  </div>
                  <Link to={`/recipe/${card.id}`}>
                    <button type="button" className="btn btn-info" id="view">
                      View Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {numOfCardsToShow < filteredJobData.length && (
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button
              type="button"
              className="btn btn-info w-25 h-100"
              id="show"
              onClick={showMoreCards}
            >
              See All Chef
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
