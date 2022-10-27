import React from 'react'
import star from '../images/star.png'

export default function Card(props) {
   
  let badgeText
  if (props.openSpots === 0) {
     badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
     badgeText = "ONLINE"
  }

    return (
        <div className='card'>
          {badgeText && <div className='card-badge'>{badgeText}</div>}
          <img src={`/cardImages/${props.coverImg}`} alt={props.title} className='card-photo' />
           <div className='card-statistic'>
            <img  src={star} alt='little red star' className='card-star' />
            <span className='card-rating'>{props.stats.rating}</span>
            <span className='card-reviews'>({props.stats.reviewCount}) • </span>
            <span className='card-location'>{props.location}</span>
           </div>
          <p>{props.title}</p>
          <p><span className='card-price'>From ${props.price}</span> / person</p>
        </div>
    )
}