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

  // This is to set the header as extended and not animated when the page is loaded.
  useEffect(() => {
    setHeaderExtended(true);
    setHeaderAnimated(false);
  }, []);

  // Context definition and navigation
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext);
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
  const ratingContainerRef = useRef(null);

  // Content definition
  const [mainText] = useState("¿Cómo calificarías tu experiencia1?");

  // Handles form submit event
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (rating > 3) {
      navigate(URLSNAV.HIGH_RATING(id));
    } else {
      goToNextPage();
    }
  };

  // Changes UI elements based on the rating value
  const goToNextPage = () => {
    setUser({
      ...user,
      rating: rating,
      lastPage: URLSNAV.RATING(id),
    });

    setShow(false);
    setHeaderExtended(false);
    setHeaderAnimated(true);

    if (rating > 3) {
      navigate(URLSNAV.HIGH_RATING(id));
    } else {
      navigate(URLSNAV.LOW_RATING(id));
    }
  };

  // function that returns all the elements form the first page
  return(
    <form onSubmit={handleSubmit} className="review-form">          
    <CSSTransition
      in={show}  
      nodeRef={ratingContainerRef}
      timeout={300}
      classNames="rating-container-animation"
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

          <input 
            type="submit"
            className={"submit-button"}
            value="Enviar reseña" />
        </div>
      </CSSTransition>
    </form>
  );
};

export default RatingPage;