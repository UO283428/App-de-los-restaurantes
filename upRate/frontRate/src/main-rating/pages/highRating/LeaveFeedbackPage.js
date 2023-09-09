import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import Link from '../../components/Link';
import { URLSNAV } from '../../constants/urls';
import { API_URLS } from '../../../config';
import { HeaderContext } from '../../../HeaderContext';
import './styles/LeaveFeedbackPage.css';


/**
 *  This component is designed to provide feedback functionality.
 *  The user is encouraged to leave a positive review on certain platforms after having a satisfactory experience.
 *  
 *  The component uses the CSSTransition component from the react-transition-group library to manage animations, 
 *  transitions like fading in and out are essential to the component's visual effects.
 *  
 *  The component uses conditional rendering based on the isLoading state. If data is still being fetched, 
 *  a loading message is displayed. Once data fetching is complete, the links are displayed in a container.
 *  Each link uses its own CSSTransition to manage its individual animations, based on its 'show' property. 
 * 
 *  The component uses React Router's hooks, useNavigate and useParams, as it's part of a single-page application
 *  (SPA) with navigational capabilities.
 */
const LeaveFeedbackPage = () => {
  const { setHeaderAnimated, setHeaderExtended } = useContext(HeaderContext);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const linksReference = React.useRef([]);
  const leaveHeaderReferene = React.useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  /**
   *  Resets the 'show' property of every link in the links state to false.
   *  This means none of the links will be displayed as they are set up to show/hide based on this property.
   *  @returns 
   */
  const resetLinksShow = () => setLinks(prevLinks => prevLinks.map(link => ({ ...link, show: false })));

  /**
   *  Header Configuration and Data Fetching:
   *  When the component mounts, this hook sets the header to be animated and not extended
   *    using context methods (setHeaderAnimated and setHeaderExtended).
   *  Then sets a timer to make the component show after 50ms (a very short delay).
   *  This provides a fade-in animation and ensures it properly works.
   *  The hook also fetches link data from an API based on the id parameter from the URL.
   *  Once the links are fetched, they're stored in the links state.
   *  If there's an error, it simply logs the error and stops loading.
   */
  useEffect(() => {
    setHeaderAnimated(true);
    setHeaderExtended(false);
    setTimeout(() => {
      setShow(true);
    }, 50);

    fetch(API_URLS.links(id))
      .then(response => response.json())
      .then(data => {
        const fetchedLinks = data.linksArray.map(link => ({
          id: link.id,
          url: link.url,
          src: link.src,
          show: false
        }));
        setLinks(fetchedLinks);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching links:", error);
        setIsLoading(false);
      });
  }, []);

  /**
   *  Links Animation:
   *
   *  After links data is fetched and the links state changes, this hook triggers a chain reaction.
   *  It starts showing each link one after another, each with a delay of 0.25 second (250ms).
   *  This provides a cascading display effect for the links.
   */
  useEffect(() => {
    const showLink = (index) => {
      if (index >= links.length) return;

      setLinks(prevLinks => prevLinks.map((link, idx) => {
        if (idx === index) {
          return {
            ...link,
            show: true
          };
        }
        return link;
      }));

      setTimeout(() => showLink(index + 1), 200); // adjust delay as needed
    };

    setTimeout(() => showLink(0), 400); // Start after a half-second delay
  }, [links]);

  /**
   * First, it resets the 'show' property of every link to false (using the resetLinksShow function).
   * Then, after a delay of 2.5 seconds (2500ms), it navigates the user to a different page (URLSNAV.LOW_FEEDBACK(id)).
   */
  const goToNextPage = () => {
    resetLinksShow();

    setTimeout(() => {
      navigate(URLSNAV.LOW_FEEDBACK(id));
    }, 2500);
  };

  return (
    <>
      <CSSTransition
        timeout={400}
        classNames="fade-in-up"
        nodeRef={leaveHeaderReferene}
        in={show}
        unmountOnExit
      >
        <div ref={leaveHeaderReferene} className="leave-feedback-header">
          <Text className="leave-feedback-title" content="¡Nos alegra mucho que haya quedado satisfecho!" />
          <Text className="leave-feedback-text" content="Le agradeceriamos si pudiera dejar una review positiva en alguna de estas plataformas." />
        </div>
      </CSSTransition>
      {isLoading ? (
        <div className="loading">
          <Text className="loading-text" content="Cargando..." />
        </div>
      ) : (
        <div className='leave-feedback-container'>
          {links.map((link, index) => (
            <CSSTransition
              key={link.id}
              in={link.show}
              timeout={400}
              classNames="fade-in-up"
              nodeRef={linksReference.current[index]}
              unmountOnExit
            >
              <div className="cosas" ref={linksReference.current[index]}>
                <Link src={link.src} url={link.url} />
              </div>
            </CSSTransition>
          ))}
        </div>
      )}
    </>
  );
};

export default LeaveFeedbackPage;
