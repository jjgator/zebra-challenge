import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <b>{props.carrier.name}</b>  
      {props.carrier.type === 2 ? <p>${Math.ceil(props.carrier.rate)}/month</p> : <button>{props.carrier.action.link_text}</button>}
    </div>
  );
}

export default Card;