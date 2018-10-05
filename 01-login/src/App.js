import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>Login!</h1>
        <form onSubmit={e => {
            e.preventDefault();

            console.log('state', JSON.stringify(this.state));
            console.log('submitted');
          }}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
