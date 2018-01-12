import React from 'react';

const Details = (props) => {
  return (
    <div className='details col-xs-6 text-center'>
      <p>Why {props.name}?</p>
      <p className='detail-text'>{props.text}</p>
    </div>
  )
}

export default Details;
