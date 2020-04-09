import React, { Component } from 'react';
import './App.css';

import Cards from './component/card/Card.component'
import Chart from './component/chart/Chart.component';
import CountryPicker from './component/country-picker/Country-Picker.component';
import {fetchData} from './api'

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div className='main-container'>
      <Cards data={data}/>
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App; 
