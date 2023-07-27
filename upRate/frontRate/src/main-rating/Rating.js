import React, { useState } from 'react';
import Image from './components/Image';
import Logo from './components/Logo';
import Text from './components/Text';
import CustomStarIcon from './components/CustomStarIcon';
import StarRatings from 'react-star-ratings';

const Rating = () => {

  const [rating, setRating] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Rating ${rating}`)
  }

    return (
      <div className="app">
          <form onSubmit={handleSubmit} className="review-form">
              {/*<Image className="background-image" src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />*/}
              <Image className="background-image" src="https://www.justretail.news/wp-content/uploads/2021/08/Goiko-H2O-noticias-retail-2-scaled.jpg" alt="Example Image" />
              <Logo className="logo-image" src="https://www.itaroa.com/wp-content/uploads/2019/11/gopikodes.jpg" alt="Example Logo" />
              <Text className="text-content" content="Rate the restaurant" />
              <CustomStarIcon className="rating-icons" setRating={setRating}/>
              <input type="submit" className="submit-button" value="Enviar reseña" />
          </form>
      </div>
  );
};

export default Rating;
