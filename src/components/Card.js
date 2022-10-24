import React from 'react';
import hero1 from '../images/hero1.png';
import star from '../images/star.png';

export default function Card() {
    return (
        <section className='card'>
          <img src={hero1} alt='swimmer' className='card-photo' />
           <div className='card-statistic'>
            <img  src={star} alt='little red star' className='card-star' />
            <span className='card-rating'>5.0</span>
            <span className='card-reviews'>(6) • </span>
            <span className='card-location'>USA</span>
           </div>
          <p>Life lessons with Katie Zaferes</p>
          <p><span className='card-price'>From $136</span> / person</p>
        </section>
    )
}