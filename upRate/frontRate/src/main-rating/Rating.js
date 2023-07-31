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
  const [isExpanded, setIsExpanded] = useState(false);
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
    setIsExpanded(true);
    setMainText("¿Qué podemos mejorar?");

  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="review-form">
        <Image 
          className= {'front-page-image' + (isExpanded ? ' expanded' : '')} 
          src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
        
        <Logo 
          className={"logo-image" + (isExpanded ? ' expanded' : '')} 
          src="https://boldflowco.com/wp-content/uploads/2023/07/logo-goiko.png" alt="Example Logo" />
        
        <div 
          className={"rating-container" + (isExpanded ? ' expanded' : '')}>
          
          <Text 
            className={"text-content" + (isExpanded ? ' expanded' : '')}
            content={mainText} />
          
          <CustomStarIcon 
            className={"rating-icons" + (isExpanded ? ' expanded' : '')}
            setRating={setRating}/>

          {/* If the rating is less than 3, show the input of text.*/}
          <input
            className={"text-input" + (isExpanded ? ' expanded' : '')}
            type="text"
            placeholder="Escribe tu opinión aquí"
          />

          <input 
            type="submit"
            className={"submit-button" + (isExpanded ? ' expanded' : '')}
            value="Enviar reseña" />
        </div>
      </form>
    </div>
  );
};

// Exporting Rating component as default
export default Rating;