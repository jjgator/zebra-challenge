import React from 'react';
import Title from './Title.jsx';
import Quote from './Quote.jsx';

const Main = (props) => {
  console.log('main props: ', props.data);
  return (
    <div>
      <Title />
      <Quote />
    </div>
  )
}

export default Main;
