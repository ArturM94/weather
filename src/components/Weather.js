import React from 'react';

const Weather = (props) => (
  <div className='weather__info'>
    {
      props.city && props.country && <p className='weather__key'>Location:
        <span className='weather__value'> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temp && <p className='weather__key'>Temperature:
        <span className='weather__value'> {props.temp}&deg;C</span>
      </p>
    }
    {
      props.humidity && <p className='weather__key'>Humidity:
        <span className='weather__value'> {props.humidity}&#37;</span>
      </p>
    }
    {
      props.description && <p className='weather__key'>Condition:
        <span className='weather__value'> {props.description}</span>
      </p>
    }
    {props.error && <p className='weather__error'>
      <span> {props.error}</span>
    </p>}
  </div>
);

export default Weather;
