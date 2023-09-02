import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../components/Text';
import { URLSNAV } from '../constants/urls';
import { HeaderContext } from '../../HeaderContext';
import './styles/FeedbackPage.css';


const FeedbackPage = () => {
  
  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);

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
  
    // Handles form submit event
    const handleSubmit = (evt) => {
        evt.preventDefault();

        //Here the animation trigger
        setShow(false);

        // wait for animation to finish and then navigate
        setTimeout(() => {
          navigate(URLSNAV.RATING(id));
        }, 250);
    };


    return (
          <form onSubmit={handleSubmit} className="review-form">
            < CSSTransition
              in={show}
              nodeRef={ratingContainerRef}
              timeout={250}
              classNames="rating-container-animation"
              unmountOnExit
            >
              <div
                className={"rating-container"}
                ref={ratingContainerRef}>
                  <Text
                    className={"question"}
                    content="¿Cuentanos un poco más de tu experiencia?" />
                  <input
                    className={"text-input"}
                    type="text"
                    placeholder="Escribe tu opinión aquí"
                  />
                  <input
                    type="submit"
                    className={"submit-button"}
                    value="Enviar respuestas" />
              </div>
            </CSSTransition>
          </form>
    );
}

export default FeedbackPage;