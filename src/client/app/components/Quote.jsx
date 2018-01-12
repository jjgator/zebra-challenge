import React from 'react';
import Button from './Button.jsx';

const Quote = (props) => {
  return (
    <div>
      <p>Rate Placeholder</p>
      <Button link={props.data.link}/>
    </div>
  )
}

export default Quote;
