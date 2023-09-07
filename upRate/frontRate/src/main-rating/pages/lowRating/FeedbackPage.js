import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import { URLSNAV } from '../../constants/urls';
import { HeaderContext } from '../../../HeaderContext';
import { UserContext } from '../../../UserContext';
import './styles/FeedbackPage.css';


const FeedbackPage = () => {

  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);
  const [feedbackText, setFeedbackText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {jwtToken, setJwtToken, bulkData, setBulkData} = useContext(UserContext);

  useEffect(() => {
    setHeaderExtended(false);
    setHeaderAnimated(false);
  }, []);

  const navigate = useNavigate();

  // Get the id from the url subdomain.basedomain.es/id/...
  const { id } = useParams();

  // Animation fade-in fade-out
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 50);
  
    // Clear the timeout if the component is unmounted before the timeout fires
    return () => clearTimeout(timer);
  }, []);
  const ratingContainerRef = React.useRef(null);

  
  const handleInputChange = (e) => {
    e.target.style.height = "inherit";
    const computed = window.getComputedStyle(e.target);
    const height = parseInt(computed.getPropertyValue("border-top-width"), 10)
                 + parseInt(computed.getPropertyValue("border-bottom-width"), 10)
                 + e.target.scrollHeight;
                 
    e.target.style.height = height + "px";
    setFeedbackText(e.target.value);
  };


  // Handles form submit event
  const handleSubmit = (evt) => {
      evt.preventDefault();

      //Validate that the user has written something and not more than 500 characters
      if (feedbackText.length === 0) {
        setErrorMessage('Por favor, escribe algo');
        return;
      } else if (feedbackText.length > 500) {
        setErrorMessage('Por favor, no escribas más de 500 caracteres');
        return;
      }

      //Setting context to new values
      setBulkData(prevData => ({
        ...prevData,
        finalText: feedbackText,
        lastPage: URLSNAV.LOW_FEEDBACK(id),
      }));
      console.log("bulkData: ", bulkData);

      //Here the animation trigger
      setShow(false);

      // wait for animation to finish and then navigate
      setTimeout(() => {
        navigate(URLSNAV.LOW_THANX(id));
      }, 300);
  };


    return (
      <form onSubmit={handleSubmit} className="review-form">
        <CSSTransition
          in={show}
          nodeRef={ratingContainerRef}
          timeout={300}
          classNames="fade-in-up-out-down"
          unmountOnExit
        >
          <div
            className={"rating-container"}
            ref={ratingContainerRef}>
              <Text
                className={"question"}
                content="¿Cuentanos un poco más de tu experiencia?" />
              <textarea
                className={"text-input"}
                placeholder="Escribe tu opinión aquí"
                rows="1"
                onChange={handleInputChange}
                maxLength="500"
              />
              { errorMessage === '' ? null : <div className={"error-message"}>{errorMessage}</div> }
              <input
                type="submit"
                className={"submit-button" + (feedbackText.length === 0 ? " disabled" : "")}
                value="Enviar respuestas" />
          </div>
        </CSSTransition>
      </form>
    );
}

export default FeedbackPage;