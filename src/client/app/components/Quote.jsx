import React from 'react';
import Button from './Button.jsx';

const Quote = (props) => {
  let rate = null;
  //if rate is available, round up to nearest whole number
  if (props.data.rate !== null) {
    rate = Math.ceil(props.data.rate);
  }

  return (
    <div className='quote col-xs-6 text-right'>
      {props.data.rate ? <p><span className='rate-tag'>{props.data.rate_tag} </span>${rate} / mo</p> : null}
      {props.type === 0 || props.type === 3 ? <Button type={props.type} link={props.data.link}/> : null}
    </div>
  )
}

export default Quote;
