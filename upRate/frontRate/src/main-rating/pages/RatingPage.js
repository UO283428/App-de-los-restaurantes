import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Text from "../components/Text";
import CustomStarIcon from "../components/CustomStarIcon";
import { URLS } from "../constants/urls";
import "./styles/RatingPage.css";

// RatingPage component
// The rating pages is inside a layout as the different pages in the webApp. This way 
// we control the header actions and position with the setHeaderExtended and setHeaderAnimated
// functions. They are set as extended and not animated in this page.
const RatingPage = ({ setHeaderExtended, setHeaderAnimated }) => {

  // This is to set the header as extended and not animated when the page is loaded.
  // When it is left, it is set as extended and animated again.
  useEffect(() => {
    setHeaderExtended(true);
    // You can also set it back to true or any other value on component unmount
    return () => {
      setHeaderExtended(false);
    }
  }, [setHeaderExtended]);

  useEffect(() => {
    setHeaderAnimated(false);
    // You can also set it back to false or any other value on component unmount
    return () => {
      setHeaderAnimated(true);
    }
  }, [setHeaderAnimated]);

  // Context definition and navigation
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);
  
  // State definition
  const [rating, setRating] = useState(0);

  // Content definition
  const [mainText] = useState("¿Cómo calificarías tu experiencia?");

  // Handles form submit event
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (rating > 3) {
      navigate(URLS.HIGH_RATING);
    } else {
      goToNextPage();
    }
  };

  // Changes UI elements based on the rating value
  const goToNextPage = () => {
    setUser({
      ...user,
      rating: rating,
      lastPage: URLS.RATING
    });
    if (rating > 3) {
      navigate(URLS.HIGH_RATING);
    } else {
      setHeaderExtended(false);
      setHeaderAnimated(true);

      navigate(URLS.LOW_RATING);
    }
  };

  // function that returns all the elements form the first page
  return(
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
  ); 

};

export default RatingPage;