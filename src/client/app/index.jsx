import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrierData: []
    }
  }

  componentDidMount () {
    fetch('/data')
      .then(response => response.json())
      .then(data => {
        let carrierData = data.carrier_cards;
        this.setState({carrierData: carrierData});
        console.log('state', this.state.carrierData);
      })
  }

  render () {
    return <p>You've just compared x rates in x minutes!</p>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));