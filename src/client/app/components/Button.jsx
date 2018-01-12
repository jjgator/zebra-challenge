import React from 'react';

const Button = (props) => {
  let text = '';
  if (props.type === 0) {
    text = 'Get Quote';
  } else if (props.type === 3) {
    text = 'Buy Now';
  }

  return (
    <button className={'btn' + props.type}>{text}</button>
  )
}

export default Button;
