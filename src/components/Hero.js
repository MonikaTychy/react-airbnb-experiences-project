import React from 'react';
import group from '../images/group.png';

export default function Hero() {
    return (
        <div className='hero'>
         <img src={group} alt='group of pictures of diffrent peoples' />
         <h1>Online Experiences</h1>
         <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}