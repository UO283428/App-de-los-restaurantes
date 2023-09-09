import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { UserContext } from "../../UserContext";
import Text from "../components/Text";
import CustomStarIcon from "../components/CustomStarIcon";
import { URLSNAV } from "../constants/urls";
import { HeaderContext } from "../../HeaderContext";
import "./styles/RatingPage.css";

// RatingPage component
// The rating pages is inside a layout as the different pages in the webApp. This way 
// we control the header actions and position with the setHeaderExtended and setHeaderAnimated
// functions. They are set as extended and not animated in this page.
const RatingPage = () => {

  const { id } = useParams();

  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);

  const [errorMessage, setErrorMessage] = useState("");


  // This is to set the header as extended and not animated when the page is loaded.
  useEffect(() => {
    setHeaderExtended(true);
    setHeaderAnimated(false);
  }, []);

  // Context definition and navigation
  const navigate = useNavigate();

  const {jwtToken, setJwtToken, bulkData, setBulkData} = useContext(UserContext);

  // State definition
  const [rating, setRating] = useState(0);
  // Animation fade-in fade-out
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 50);
  
    // Clear the timeout if the component is unmounted before the timeout fires
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("bulkData: ", bulkData);
  }, []);

  const ratingContainerRef = useRef(null);
  const buttonContainerRef = useRef(null);


  // Content definition
  const [mainText] = useState("How do you rate your experience?");

  // Handles form submit event
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (rating === 0) {
      setErrorMessage("Please select at least one star.");
      return;
    }

    //Setting context to new values
    setBulkData(prevData => ({
      ...prevData,
      generalRating: rating,
      lastPage: URLSNAV.RATING(id),
    }));

    console.log("bulkData: ", bulkData);

    goToNextPage();
  };

  // Changes UI elements based on the rating value
  const goToNextPage = () => {
    //Setting context to new values 
    //  rating: rating,
    //  lastPage: URLSNAV.RATING(id),
    

    setShow(false);
    setHeaderExtended(false);
    setHeaderAnimated(true);

    setTimeout(() => {
      if (rating > 3) {
        navigate(URLSNAV.HIGH_FEEDBACK(id));
      } else {
        navigate(URLSNAV.LOW_RATING(id));
      }
    }, 400);
  };

  // function that returns all the elements form the first page
  return(
    <form onSubmit={handleSubmit} className="review-form">          
      <CSSTransition
        in={show}  
        nodeRef={ratingContainerRef}
        timeout={400}
        classNames="fade-in-up"
        unmountOnExit
        >
        <div 
          ref={ratingContainerRef}
          className={"rating-container"}>
            
          <Text 
            className={"text-content"}
            content={mainText} />

          <CustomStarIcon 
            className={"rating-icons"}
            setRating={setRating}/>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </CSSTransition>
      <CSSTransition
        in={show}
        nodeRef={buttonContainerRef}
        timeout={400}
        classNames="fade-in-up"
        unmountOnExit
        >
          <div 
            className={"button-container"}
            ref={buttonContainerRef}>
          <input 
            type="submit"
            className={"submit-button" + (rating === 0 ? " disabled" : "")}
            value="Enviar reseña"/>
          </div>
      </CSSTransition>
    </form>
  );
};

export default RatingPage;