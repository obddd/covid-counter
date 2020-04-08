import React, { Component } from 'react';
import './App.css';

import Card from './component/card/Card.component'
import Chart from './component/chart/Chart.component';
import CountryPicker from './component/country-picker/Country-Picker.component';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Card />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App; 
