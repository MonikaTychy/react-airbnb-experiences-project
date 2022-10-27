import React from 'react';
// import hero1 from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card(props) {
    return (
        <section className='card'>
          <img src='../images/katie-zaferes.png' alt={props.title} className='card-photo' />
           <div className='card-statistic'>
            <img  src={star} alt='little red star' className='card-star' />
            <span className='card-rating'>{props.rating}</span>
            <span className='card-reviews'>({props.reviewCount}) • </span>
            <span className='card-location'>{props.location}</span>
           </div>
          <p>{props.title}</p>
          <p><span className='card-price'>From ${props.price}</span> / person</p>
        </section>
    )
}