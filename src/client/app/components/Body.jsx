import React from 'react';
import Features from './Features.jsx';
import Details from './Details.jsx';

const Body = (props) => {
  console.log('body props: ', props.data);
  return (
    <div>
      <Features />
      <Details />
    </div>
  )
}

export default Body;
