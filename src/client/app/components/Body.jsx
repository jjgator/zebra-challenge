import React from 'react';
import Features from './Features.jsx';
import Details from './Details.jsx';

const Body = (props) => {
  return (
    <div className='body row'>
      <Features list={props.data.featureArray} />
      <Details name={props.data.name} text={props.data.detail_body} disclaimer={props.data.disclaimer} />
    </div>
  )
}

export default Body;
