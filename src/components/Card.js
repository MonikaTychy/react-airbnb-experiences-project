import React from 'react';
import hero1 from '../images/hero1.png';
import star from '../images/star.png';

export default function Card() {
    return (
        <section className='card'>
          <img src={hero1} alt='swimmer' className='card--photo' />
          <img  src={star} alt='little red star' className='card--star' />
          <p>5.0 (6)•USA</p>
          <p>Life lessons with Katie Zaferes</p>
          <p>From $136 / person</p>
        </section>
    )
}