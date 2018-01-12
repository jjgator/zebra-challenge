import React from 'react';
import Main from './Main.jsx';
import Body from './Body.jsx';

const Card = (props) => {
  let mainObj = {
    rate: props.carrier.rate || null,
    tag: props.carrier.tag || null,
    corner_tag: props.carrier.corner_tag || null,
    name: props.carrier.name,
    stars: props.carrier.stars || null,
    tagline: props.carrier.tagline || null,
    featureArray: props.carrier.features || null,
    link: props.carrier.action.link
  };

  let bodyObj = {
    featureArray: props.carrier.features || props.carrier.features_html,
    detail_body: props.carrier.detail_body || null,
    disclaimer: {
      disclaimer_visible: props.carrier.action.disclaimer_visible || null,
      disclaimer_text: props.carrier.action.disclaimer_text || null
    }
  };

  //console.log(mainObj, bodyObj);

  return (
    <div className='card'>
      <Main data={mainObj}/>
      <Body data={bodyObj}/>
    </div>
  )
}

export default Card;