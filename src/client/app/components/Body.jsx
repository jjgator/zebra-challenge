import React from 'react';
import Features from './Features.jsx';
import Details from './Details.jsx';

const Body = (props) => {
  return (
    <div>
      <Features list={props.data.featureArray} />
      <Details text={props.data.detail_body} disclaimer={props.data.disclaimer} />
    </div>
  )
}

export default Body;
