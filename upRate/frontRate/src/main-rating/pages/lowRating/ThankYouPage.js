import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import { URLSNAV } from '../../constants/urls';
import { HeaderContext } from '../../../HeaderContext';
import { UserContext } from '../../../UserContext';
import './styles/ThankYouPage.css';


const ThankYouPage = () => {

  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);
  const {jwtToken, setJwtToken, bulkData, setBulkData} = useContext(UserContext);

  useEffect(() => {
    setHeaderExtended(true);
    setHeaderAnimated(true);
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
  const thanksMessageContainer = React.useRef(null);


    return (
        < CSSTransition
          in={show}
          nodeRef={thanksMessageContainer}
          timeout={300}
          classNames="fade-in-down"
          unmountOnExit
        >
          <div ref={thanksMessageContainer} className={"thanks-message"}>
            <Text className="thanks-text" content="¡Gracias por tu valoración!" />
            <Text className="thanks-text" content="Esperamos verle pronto y que tenga una visita más satisfactoria!" />
          </div>
        </CSSTransition>
    );
}

export default ThankYouPage;