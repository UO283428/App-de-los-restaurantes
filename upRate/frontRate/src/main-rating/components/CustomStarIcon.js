import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './CustomStarIcon.css';

const CustomStarIcon = ( { setRating } ) => {
    const [rating, setRatingStars] = useState(null);
    const [hover, setHover] = useState(null);


    return (
        <div>
            {[... Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => {setRatingStars(ratingValue); setRating(ratingValue); }}
                        />
                        <FaStar
                        className='star'
                        size={100}
                        color={ ratingValue <= ( hover || rating ) ? '#ffc107' : '#e4e5e9'}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default CustomStarIcon;