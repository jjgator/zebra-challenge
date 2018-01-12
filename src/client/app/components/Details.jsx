import React from 'react';

const Details = (props) => {
  return (
    <div className='details col-xs-6 text-left'>
      <p>Why {props.name}?</p>
      <p className='detail-text'>{props.text}</p>
    </div>
  )
}

export default Details;
