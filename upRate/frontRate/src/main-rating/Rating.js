// Importing required modules and components
import React, { useState, useEffect } from 'react';
import Image from './components/Image';
import Logo from './components/Logo';
import Text from './components/Text';
import CustomStarIcon from './components/CustomStarIcon';

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
      setMainText("¿Qué podemos mejorar?");
    }
    else if (isReviewing === true && isAsking === false) {
      setIsReviewing(false);
      setIsAsking(true);
      setMainText("¿Qué podemos mejorar?");
    }
  };

  // function that returns all the elements form the first page
  const mainPage = () => {
    return(
      <div className="app">
        <form onSubmit={handleSubmit} className="review-form">
          <Image 
            className= {'front-page-image' + (isReviewing ? ' reviewing' : '')} 
            src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
          
          <Logo 
            className={"logo-image" + (isReviewing ? ' reviewing' : '')} 
            src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
          
          <div 
            className={"rating-container" + (isReviewing ? ' reviewing' : '')}>
            
            <Text 
              className={"text-content" + (isReviewing ? ' reviewing' : '')}
              content={mainText} />
            
            <CustomStarIcon 
              className={"rating-icons" + (isReviewing ? ' reviewing' : '')}
              setRating={setRating}/>

            <input 
              type="submit"
              className={"submit-button" + (isReviewing ? ' reviewing' : '')}
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
          <Image 
            className= {'front-page-image' + (isReviewing ? ' reviewing' : '')} 
            src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
          
          <Logo 
            className={"logo-image" + (isReviewing ? ' reviewing' : '')} 
            src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
          
          <div 
            className={"rating-container" + (isReviewing ? ' reviewing' : '')}>
            <div
              className={"rating-question " + (isReviewing ? ' reviewing' : '')}>
              <Text 
                className={"text-content" + (isReviewing ? ' reviewing' : '')}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + (isReviewing ? ' reviewing' : '')}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + (isReviewing ? ' reviewing' : '')}>
              <Text 
                className={"text-content" + (isReviewing ? ' reviewing' : '')}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + (isReviewing ? ' reviewing' : '')}
                setRating={setRating}/>
            </div>

            <div
              className={"rating-question " + (isReviewing ? ' reviewing' : '')}>
              <Text 
                className={"text-content" + (isReviewing ? ' reviewing' : '')}
                content={mainText} />
              
              <CustomStarIcon 
                className={"rating-icons" + (isReviewing ? ' reviewing' : '')}
                setRating={setRating}/>
            </div>


            {/* If the rating is less than 3, show the input of text.*/}
            <input
              className={"text-input" + (isReviewing ? ' reviewing' : '')}
              type="text"
              placeholder="Escribe tu opinión aquí"
            />

            <input 
              type="submit"
              className={"submit-button" + (isReviewing ? ' reviewing' : '')}
              value="Enviar respuestas" />
          </div>
        </form>
      </div>
    );
  };

    // function that returns all the elements form the second page
    // TODO: Asking page not working
    const askingPage = () => {
      return (
        <div className="app">
          <form onSubmit={handleSubmit} className="review-form">
            <Image 
              className= {'front-page-image' + (isReviewing ? ' reviewing' : '')} 
              src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
            
            <Logo 
              className={"logo-image" + (isReviewing ? ' reviewing' : '')} 
              src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
            
            <div 
              className={"rating-container" + (isReviewing ? ' reviewing' : '')}>
                <Text 
                  className={"text-content" + (isReviewing ? ' reviewing' : '')}
                  content={mainText} />
                
  
              {/* If the rating is less than 3, show the input of text.*/}
              <input
                className={"text-input" + ""}
                type="text"
                placeholder="aaaaaaaaaaquí"
              />
  
              <input 
                type="submit"
                className={"submit-button" + (isReviewing ? ' reviewing' : '')}
                value="Enviar respuestas" />
            </div>
          </form>
          <input
                className={"text-input" + ""}
                type="text"
                placeholder="aaaaaaaaaaquí"
              />
        </div>
      );
    };

  return (
    <div>
      { !isReviewing && !isAsking ? mainPage() : '' }
      { isReviewing && !isAsking ? reviewingPage() : '' }
      { !isReviewing && isAsking ? askingPage() : ''}
    </div>
  );
};

// Exporting Rating component as default
export default Rating;