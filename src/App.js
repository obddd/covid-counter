import React, { Component } from 'react';
import './App.css';

import Cards from './component/card/Card.component'
import Chart from './component/chart/Chart.component';
import CountryPicker from './component/country-picker/Country-Picker.component';
import Header from './component/Header'
import Flag from './component/flag/Flag.component';
import {fetchData} from './api'
import { fetchConditionToday } from './api'

class App extends Component {
  state = {
    data: {},
    country: '',
    conditionToday:{}
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country)
    const fetchedConditionToday = await fetchConditionToday(country)
    this.setState({
      data: fetchedData,
      country: country,
      conditionToday: fetchedConditionToday
    })
    // console.log(this.state.conditionToday)
  }

  render() {
    const { data, country, conditionToday } = this.state;
    return (
      <div className='main-container'>
        <Header/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {country && <Flag todaysData={conditionToday}/> }
        <Chart data={data} country={country} todaysData={conditionToday} /> 
      </div>
    );
  }
}

export default App; 
