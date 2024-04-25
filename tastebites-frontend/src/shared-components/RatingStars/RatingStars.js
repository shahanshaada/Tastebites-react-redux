import React from 'react';
import { FaStar } from 'react-icons/fa';
import style from './RatingStars.module.scss';

const RatingStars = ({ id,initialRating, onRatingChange }) => {
let ratee=initialRating;
  const handleStarClick = (index) => {
    const newRating = index + 1;
    ratee=newRating;
    onRatingChange(id,newRating);
  };

  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        let starIcon;

        if (starValue <= Math.floor(ratee)) {
          starIcon = <FaStar key={index} className={style.rated} onClick={() => handleStarClick(index)} />;
        } else {
          starIcon = <FaStar key={index} className={style.star} onClick={() => handleStarClick(index)} />;
        }

        return starIcon;
      })}
    </div>
  );
};

export default RatingStars;
