import React from 'react';
import Main from './Main.jsx';
import Body from './Body.jsx';

const Card = (props) => {
  //group JSON data into separate objects to send to two child components
  let mainObj = {
    rate: props.carrier.rate || null,
    rate_tag: props.carrier.tag || null,
    name: props.carrier.name,
    stars: props.carrier.stars || null,
    tagline: props.carrier.tagline || null,
    featureArray: props.carrier.features || null,
    link: props.carrier.action.link
  };
  let bodyObj = {
    name: props.carrier.name,
    featureArray: props.carrier.features || props.carrier.features_html,
    detail_body: props.carrier.detail_body || null,
    disclaimer: {
      disclaimer_visible: props.carrier.action.disclaimer_visible || null,
      disclaimer_text: props.carrier.action.disclaimer_text || null
    }
  };

  return (
    <div  className='card container-fluid'>
      <Main type={props.carrier.type} data={mainObj} corner-tag={props.carrier.corner_tag || false} />
      <Body data={bodyObj} />
    </div> 
  )
}

export default Card;