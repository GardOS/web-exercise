import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: []
    };
  }

  getFruits(){
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(fruits => this.setState({ fruits }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.fruits === null || this.state.fruits.length === 0) {
      return (
        <div className="container">
          <h1>No fruits!</h1>
          <button onClick={() => this.getFruits()}>
            I want fruits!
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1>Fruits!</h1>
          {this.state.fruits.map(f =>
            <div key = {f.index}>
              {`Fruit: ${f.fruit} \t -\tcolor: ${f.color}`}
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
