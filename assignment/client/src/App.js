import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      fruits: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:8080/fruits')
      .then(res => res.json())
      .then(colors => this.setState({ colors }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        Hello!
      </div>
    );
  }
}

export default App;
