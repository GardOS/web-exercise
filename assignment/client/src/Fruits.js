import React, { Component } from 'react';
import './App.css';
import FruitForm from './FruitForm';
import FruitTable from './FruitTable';

class Fruits extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
    };

    this.addFruit = this.addFruit.bind(this)
    this.deleteFruit = this.deleteFruit.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:8080/fruits')
      .then(res => res.json())
      .then(fruits => this.setState({ fruits }))
      .catch(err => console.error(err));
  }

  addFruit(newFruit) {
    this.setState({
      fruits: [...this.state.fruits, newFruit]
    })
  }

  deleteFruit(index) {
    this.setState((prevState) => ({
      fruits: prevState.fruits.filter((_, i) => i !== index)
    }))
  }

  render() {
    return (
      <div className="container">
        <h1>Fruits!</h1>

        <FruitForm newFruitHandler={this.addFruit} />

        <br />

        <FruitTable fruits={this.state.fruits} deleteFruitHandler={this.deleteFruit} />
      </div>
    );
  }
}

export default Fruits;
