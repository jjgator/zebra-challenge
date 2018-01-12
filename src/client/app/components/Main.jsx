import React from 'react';
import Title from './Title.jsx';
import Quote from './Quote.jsx';

const Main = (props) => {
  let titleObj = {
    name: props.data.name,
    stars: props.data.stars,
    tagline: props.data.tagline,
    featureArray: props.data.featureArray
  };

  let quoteObj = {
    rate: props.data.rate,
    rate_tag: props.data.rate_tag,
    link: props.data.link
  }

  return (
    <div>
      <Title data={titleObj} />
      <Quote card-type={props.card_type} data={quoteObj} />
    </div>
  )
}

export default Main;
