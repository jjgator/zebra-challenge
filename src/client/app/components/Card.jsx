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