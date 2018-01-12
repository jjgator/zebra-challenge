import React from 'react';

const Title = (props) => {
  return (
    <div className='title col-xs-6'>
      <img className='logo' src='../../logo-carrier-sm-default.png' />  
      <b className='carrier-name'>{props.data.name}</b>  
    </div>
  )
}

export default Title;
