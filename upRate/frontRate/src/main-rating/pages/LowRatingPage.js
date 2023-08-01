import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "../components/Header";
import Text from "../components/Text";
import Image from "../components/Image";
import Logo from "../components/Logo";
import CustomStarIcon from "../components/CustomStarIcon";

// Rating Component
const LowRatingPage = () => {
  const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);
    // State definition
    const [rate, setRate] = useState(0);
    const [rating, setRating] = useState(0);
    const [isReviewing, setIsReviewing] = useState(false);
    const [isAsking, setIsAsking] = useState(false);
    const [mainText, setMainText] = useState("¿Cómo calificarías tu experiencia?");

    // Handles form submit event
    const handleSubmit = (evt) => {
      evt.preventDefault();
      goToNextPage();
    };
  
    // Changes UI elements based on the rating value
    const goToNextPage = () => {
      setUser({
        ...user,
        rate: rate
      });
      navigate('/feedback');
    };




 return (
    <TransitionGroup>
      <CSSTransition 
        key="mainPage" 
        timeout={500} 
        classNames="fade">
        <div className="app">
        <Header />
        <form onSubmit={handleSubmit} className="review-form">
          <div 
            className={"rating-container" + ' reviewing'}>
            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <input 
              type="submit"
              className={"submit-button" + ' reviewing'}
              value="Enviar respuestas" />
          </div>
        </form>
      </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

// Exporting Rating component as default
export default LowRatingPage;