import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "../components/Header";
import Text from "../components/Text";
import CustomStarIcon from "../components/CustomStarIcon";
import "./styles/RatingPage.css";

    // Rating Component
const RatingPage = (props) => {

  const contextValue = useContext(UserContext);
  console.log(contextValue);

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    // State definition
    const [rating, setRating] = useState(0);
    const [isReviewing, setIsReviewing] = useState(false);
    const [isAsking, setIsAsking] = useState(false);
    const [mainText, setMainText] = useState("¿Cómo calificarías tu experiencia?");

    // Handles form submit event
    const handleSubmit = (evt) => {
      evt.preventDefault();
      if (rating > 3) {
        alert(`Thank you for your review!`);
      } else {
        goToNextPage();
      }
    };
  
    // Changes UI elements based on the rating value
    const goToNextPage = () => {
      setUser({
        ...user,
        rating: rating
      });
      if (rating > 3) {
        navigate("/high-rating");
      } else {
        navigate("/low-rating");
      }
    };

    // function that returns all the elements form the first page
  const mainPage = () => {
    return(
      <div className="app">
        <Header extended="true" />
        <form onSubmit={handleSubmit} className="review-form">          
          <div 
            className={"rating-container"}>
            
            <Text 
              className={"text-content"}
              content={mainText} />
            
            <CustomStarIcon 
              className={"rating-icons"}
              setRating={setRating}/>

            <input 
              type="submit"
              className={"submit-button"}
              value="Enviar reseña" />
          </div>
        </form>
      </div>
    ); 
 };


 return (
    <TransitionGroup>
    {!isReviewing && !isAsking && 
      <CSSTransition 
        key="mainPage" 
        timeout={500} 
        classNames="fade">
        <div>{mainPage()}</div>
      </CSSTransition>}
    </TransitionGroup>
  );
};

// Exporting Rating component as default
export default RatingPage;