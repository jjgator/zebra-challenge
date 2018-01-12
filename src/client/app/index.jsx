import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrierData: [],
      results: 0,
      searchTime: 0
    }
  }

  componentDidMount () {
    //API call for carrier data
    fetch('/data')
      .then(response => response.json())
      .then(data => {
        this.setState({
          carrierData: data.carrier_cards,
          results: data.carriers_searched,
          //search time rounded up to minute
          searchTime: Math.ceil(data.search_time/60000)
        });
      })
  }

  render () {
    return (
      <div className='app'>
        <p className='header'>You just compared <strong>{this.state.results} rates</strong> in {this.state.searchTime} minutes!</p>
          {
            this.state.carrierData.map((carrierObj, i) => {
              return <Card carrier={carrierObj} key={i} />
            })
          }
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));