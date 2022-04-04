import React from 'react';
import useProducts from '../../hooks/useProducts';
import AllReview from '../AllReview/AllReview';

const Review = () => {
    const [reviews, setReviews] = useProducts()
    return (
          <div className='container'>
            <h1>Satisfied customers says ! </h1>
           <div className='product_area'>
            {
               reviews.map(review=><AllReview key={review.id} review={review}></AllReview>) 
            }
        </div>
          </div>
       
    );
};

export default Review;