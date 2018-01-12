import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <img src='../../logo-carrier-sm-default.png' />
      <b>{props.carrier.name}</b>  
    </div>
  );
}

export default Card;


      // <p>${Math.ceil(props.carrier.rate)}/month</p>
      // <button>{props.carrier.action.link_text}</button>