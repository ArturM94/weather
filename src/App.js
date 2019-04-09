import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Weather from './components/Weather';
import Form from './components/Form';

const apiKey = 'f38816136abbc40b2492acabf0d36e10';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getCurrentWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await fetch(`${baseUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json();
    console.log(data);

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: '',
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Form getCurrentWeather={this.getCurrentWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
        />
      </div>
    );
  }
}

export default App;
