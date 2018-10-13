import React, { Component } from 'react';
import './App.css';
import FruitForm from './FruitForm';
import Fruits from './Fruits';

class App extends Component {
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
      <div className="container-fluid">
        <h2>Fruits!</h2>

        <FruitForm newFruitHandler={this.addFruit} />

        <br />

        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr className="d-flex">
              <th className="col">#</th>
              <th className="col">Name</th>
              <th className="col">Taste</th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody>
            <Fruits fruits={this.state.fruits} deleteFruitHandler={this.deleteFruit}/>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
