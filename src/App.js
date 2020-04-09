import React, { Component } from 'react';
import './App.css';

import Cards from './component/card/Card.component'
import Chart from './component/chart/Chart.component';
import CountryPicker from './component/country-picker/Country-Picker.component';
import {fetchData} from './api'

class App extends Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country)
    this.setState({
      data: fetchedData,
      country: country
    })
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className='main-container'>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App; 
