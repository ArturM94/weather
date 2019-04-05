import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';

const apiKey = 'f38816136abbc40b2492acabf0d36e10';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {

  getCurrentWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await fetch(`${baseUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await apiUrl.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
