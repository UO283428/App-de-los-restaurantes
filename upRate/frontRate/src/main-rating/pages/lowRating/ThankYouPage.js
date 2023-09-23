import React, { useEffect, useState, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import { URLSNAV } from '../../constants/urls'; // Unused in this component. Consider removing if not needed.
import { HeaderContext } from '../../../HeaderContext';
import UserContext from '../../../UserContext';
import './styles/ThankYouPage.css';


/**
 *  The ThankYouPage is a component designed to display a thank-you message to users.
 *  The message is introduced with a fade-in animation shortly after the component is rendered.
 */
const ThankYouPage = () => {
  // Hooks
  const { setHeaderAnimated, setHeaderExtended } = useContext(HeaderContext);
  const { jwtToken, setJwtToken, bulkData, setBulkData } = useContext(UserContext); // Some of these are unused. Consider removing if not needed.
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const thanksMessageContainer = useRef(null);

  /**
   *  Animated Header
   *  On the initial mount of this component, it adjusts the header's style to be extended and not animated.
   */
  useEffect(() => {
    setHeaderExtended(true);
    setHeaderAnimated(false);
  }, []);

  /**
   *  Fade-in Animation
   *  The thank-you message doesn't appear immediately when the component is rendered.
   *  Instead, there's a short delay (25 milliseconds) before the message starts its fade-in animation.
   *  This brief delay ensures that the animation is displayed correctly.
   */
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 25);
    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  return (
    <CSSTransition
      in={show}
      nodeRef={thanksMessageContainer}
      timeout={400}
      classNames="fade-in-down"
      unmountOnExit
    >
      <div ref={thanksMessageContainer} className="thanks-message">
        <Text className="thanks-text" content="¡Gracias por tu valoración!" />
        <Text className="thanks-text" content="Esperamos verle pronto y que tenga una visita más satisfactoria!" />
      </div>
    </CSSTransition>
  );
}

export default ThankYouPage;