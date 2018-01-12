import React from 'react';

const Features = (props) => {
  //need to map through feature array and display available features in ul
  return (
    <div className='features col-xs-6 text-left'>
      <div className='row'>
        <h4>Features</h4>
        <div className="left-list col-xs-6">
          <ul>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
          </ul>
        </div>
        <div className="right-list col-xs-6">
          <ul>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features;
