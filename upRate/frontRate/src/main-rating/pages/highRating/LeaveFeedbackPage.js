import React, { useEffect, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate, useParams } from 'react-router-dom';
import Text from '../../components/Text';
import Link from '../../components/Link';
import { URLSNAV } from '../../constants/urls';
import { API_URLS } from '../../../config';
import { HeaderContext } from '../../../HeaderContext';
import './styles/LeaveFeedbackPage.css';


const LeaveFeedbackPage = () => {

  const {setHeaderAnimated, setHeaderExtended} = useContext(HeaderContext);
  const [links, setLinks] = useState([{
    id: "none",
    src: "https://logos-world.net/wp-content/uploads/2022/01/Google-Maps-Logo.png",
    url: "https://www.google.com",
  },
  {
    id: "none",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/TripAdvisor_Logo.svg/2560px-TripAdvisor_Logo.svg.png",
    url: "https://www.google.com",
  }]);
  const [isLoading, setIsLoading] = useState(true);
  const linksReference = React.useRef([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // Set header animation
  useEffect(() => {
    setHeaderAnimated(true);
    setHeaderExtended(false);
  }, []);

  // Animation fade-in fade-out
  useEffect(() => {
    setLinks(prevLinks => {
      return prevLinks.map(link => ({
        ...link,
        show: false,
      }));
    });

    const timer = setTimeout(() => {
      setLinks(prevLinks => {
        return prevLinks.map(link => ({
          ...link,
          show: true,
        }));
      });
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  // fetching the links from the API
  useEffect(() => {
    fetch(API_URLS.links(id))
    .then(response => response.json())
    .then(data => {
        const fetchedLinks = data.links.map(link => ({
            id: link.id,
            content: link.content,
            url: link.url,
        }));
        setLinks(fetchedLinks);
        setIsLoading(false);
        console.log("fetchedLinks: ", fetchedLinks);
    })
    .catch(error => {
        console.log("Error fetching links: ", error);
        setIsLoading(false);
    });
  }, []);



  // Changes UI elements based on the rating value
  const goToNextPage = () => {

    setLinks(prevLinks => {
      return prevLinks.map(link => ({
        ...link,
        show: false,
      }));
    });

    // wait for animation to finish and then navigate
    setTimeout(() => {
      navigate(URLSNAV.LOW_FEEDBACK(id));
    }, 250);
  };

 return (<>
  {isLoading ? (
    <div className="loading">
      <Text className="loading-text" text="Cargando..." />
    </div>
  ) : (
    <div className='leave-feedback-container'>
      {links.map((link, index) => {
        const linkReference = React.createRef(); // Create a ref

        // Store the ref in the array for each question
        linksReference.current[index] = linkReference;

        return (
          <CSSTransition
            key={link.id}
            in={link.show}
            timeout={300}
            classNames="rating-container-animation"
            nodeRef={linkReference}
            unmountOnExit
          >
            <Link ref={linkReference} src={link.src} url={link.url} alt={link.content} />
          </CSSTransition>
        );
      })}
    </div>
  )}
  </>
  );
};

export default LeaveFeedbackPage;