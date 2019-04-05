import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCurrentWeather}>
        <input type="text" name="city" placeholder="City"/>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
