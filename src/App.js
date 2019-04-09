import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Weather from './components/Weather';
import Form from './components/Form';

const apiKey = 'f38816136abbc40b2492acabf0d36e10';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const apiUrl = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json();
    console.log(data);
    if (city) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
