import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaHandPointRight } from 'react-icons/fa';
import './AllReview.css'
const AllReview = (props) => {
    const {img,name,review,date,ratings} = props.review;
    return (
        <div className='review_area'>
            <div className='review_flex'>
                <img src={img} alt="" />
                <br />
                <h4> {name.slice(0,15)} </h4>
            </div>
             <div className='review_flex'>
             <div className='ratings'>
               <small>{ratings}</small>
             </div>
             <div className="handIcon">
              <FaHandPointRight></FaHandPointRight>
             </div>
            <div className='icon'>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <FaStarHalfAlt></FaStarHalfAlt>
            </div>
              &nbsp;
             <div>
              <p className='date'><small>{date}</small></p>
             </div>
             </div>
             <p className='comment'><small> {review}</small></p>
        </div>
    );
};
export default AllReview;


