// Importing required modules and components
import React, { useState } from 'react';
import Image from './components/Image';
import Logo from './components/Logo';
import Text from './components/Text';
import CustomStarIcon from './components/CustomStarIcon';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


// Rating Component
const Rating = () => {
  // State definition
  const [rating, setRating] = useState(0);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isAsking, setIsAsking] = useState(false);
  const [mainText, setMainText] = useState("¿Cómo calificarías tu experiencia?");

  // Handles form submit event
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (rating > 3) {
      alert(`Thank you for your review!`);
    } else {
      changeElements();
    }
  };

  // Changes UI elements based on the rating value
  const changeElements = () => {
    if (isReviewing === false && isAsking === false) {
      setIsReviewing(true);
      setIsAsking(false);
      setMainText("¿Qué podemos mejorar?");
    }
    else if (isReviewing && isAsking === false) {
      setIsReviewing(false);
      setIsAsking(true);
      setMainText("¿Qué podemos mejorar?");
    } else {
      setIsAsking(false);
      setIsReviewing(false);
    }
  };

  // function that returns all the elements form the first page
  const mainPage = () => {
    return(
      <div className="app">
        <form onSubmit={handleSubmit} className="review-form">
          <Image 
            className= {'front-page-image'} 
            src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
          
          <Logo 
            className={"logo-image"} 
            src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
          
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
      </div>
    ); 
 };

  // function that returns all the elements form the second page
  const reviewingPage = () => {
    return (
      <div className="app">
        <form onSubmit={handleSubmit} className="review-form">
          <TransitionGroup>
            <CSSTransition 
            key="mainPage" 
            timeout={500} 
            classNames="IsReviewing">
              <div>
                <Image 
                  className= {'front-page-image' + ' reviewing'} 
                  src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />

                <Logo 
                  className={"logo-image" + ' reviewing'} 
                  src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <div 
            className={"rating-container" + ' reviewing'}>
            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + ' reviewing'}>
              <Text 
                className={"text-content" + ' reviewing'}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + ' reviewing'}
                setRating={setRating}/>
            </div>

            <input 
              type="submit"
              className={"submit-button" + ' reviewing'}
              value="Enviar respuestas" />
          </div>
        </form>
      </div>
    );
  };

    // function that returns all the elements form the second page
    const askingPage = () => {
      return (
        <div className="app">
          <form onSubmit={handleSubmit} className="review-form">
            <Image 
              className= {'front-page-image' + ' asking'} 
              src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
            
            <Logo 
              className={"logo-image" + ' asking'} 
              src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
            
            <div 
              className={"rating-container" + ' asking'}>
                <Text 
                  className={"text-content" + ' asking'}
                  content="¿Cuentanos un poco más de tu experiencia?" />
                
                <input
              className={"text-input" + ' asking'}
              type="text"
              placeholder="Escribe tu opinión aquí"
            />

              <input 
                type="submit"
                className={"submit-button" + ' asking'}
                value="Enviar respuestas" />
            </div>
          </form>
        </div>
      );
    };

  return (
    <TransitionGroup>
    {!isReviewing && !isAsking && 
      <CSSTransition 
        key="mainPage" 
        timeout={500} 
        classNames="fade">
        <div>{mainPage()}</div>
      </CSSTransition>}
      
    {isReviewing && !isAsking && 
      <CSSTransition 
        key="reviewingPage" 
        timeout={500} 
        classNames="fade">
        <div>{reviewingPage()}</div>
      </CSSTransition>}
      
    {!isReviewing && isAsking && 
      <CSSTransition 
        key="askingPage" 
        timeout={500} 
        classNames="fade">
        <div>{askingPage()}</div>
      </CSSTransition>}
  </TransitionGroup>
  );
};

// Exporting Rating component as default
export default Rating;