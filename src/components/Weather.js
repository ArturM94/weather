import React from 'react';

const Weather = (props) => (
  <div>
    {props.city && props.country && <p>Temperature in <strong>{props.city}, {props.country}</strong></p>}
    {props.temp && <h1>{props.temp}&deg;C</h1>}
    {props.humidity && <p>Humidity: {props.humidity}&#37;</p>}
    {props.description && <p>Condition: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Weather;
