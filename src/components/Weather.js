import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          <div>
            <p>Temperature in <strong>{this.props.city}, {this.props.country}</strong></p>
            <h1>{this.props.temp}&deg;C</h1>
            <p>Sunrise: {this.props.sunrise}</p>
            <p>Sunset: {this.props.sunset}</p>
          </div>
        }
      </div>
    );
  }
}

export default Weather;
