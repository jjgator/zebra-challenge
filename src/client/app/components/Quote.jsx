import React from 'react';
import Button from './Button.jsx';

const Quote = (props) => {
  return (
    <div className='quote col-xs-6 text-center'>
      <p>Rate Placeholder</p>
      <Button type={props.type} link={props.data.link}/>
    </div>
  )
}

export default Quote;
