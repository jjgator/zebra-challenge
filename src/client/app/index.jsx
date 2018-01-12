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
          searchTime: Math.ceil(data.search_time/60000)
        });
      })
  }

  render () {
    return (
      <div>
        <p>You just compared <strong>{this.state.results} rates</strong> in {this.state.searchTime} minutes!</p>
        <div> 
          {
            this.state.carrierData.map((carrierObj, i) => {
              return <Card carrier={carrierObj} key={i} />
            })
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));