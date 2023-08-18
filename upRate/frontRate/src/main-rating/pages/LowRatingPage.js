import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Text from "../components/Text";
import CustomStarIcon from "../components/CustomStarIcon";
import "./styles/LowRatingPage.css";

// Rating Component
const LowRatingPage = ({ setHeaderExtended }) => {
  useEffect(() => {
    // For demonstration, we are setting header to not extended on component mount
    setHeaderExtended(false);
    
    // You can also set it back to true or any other value on component unmount
    return () => {
      setHeaderExtended(true);
    }
  }, [setHeaderExtended]);
  const navigate = useNavigate();

  const {user, setUser} = useContext(UserContext);
  // State definition
  const [rate, setRate] = useState(0);
  const [rating, setRating] = useState(0);
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
    <form onSubmit={handleSubmit} className="review-form">
      <div 
        className={"rating-container"}>
        <div
          className={"rating-question "}>
          <Text 
            className={"text-content"}
            content={mainText} />
          
          <CustomStarIcon 
            className={"rating-icons"}
            setRating={setRating}/>
        </div>

        <div
          className={"rating-question "}>
          <Text 
            className={"text-content"}
            content={mainText} />
          
          <CustomStarIcon 
            className={"rating-icons"}
            setRating={setRating}/>
        </div>

        <div
          className={"rating-question "}>
          <Text 
            className={"text-content"}
            content={mainText} />
          
          <CustomStarIcon 
            className={"rating-icons"}
            setRating={setRating}/>
        </div>

        <input
          type="submit"
          className={"submit-button"}
          value="Enviar respuestas" />
      </div>
    </form>
  );
};

// Exporting Rating component as default
export default LowRatingPage;