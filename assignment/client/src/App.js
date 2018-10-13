import React, { Component } from 'react';
import './App.css';
import FruitForm from './FruitForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
    };

    this.addFruit = this.addFruit.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:8080/fruits')
      .then(res => res.json())
      .then(fruits => this.setState({ fruits }))
      .catch(err => console.error(err));
  }

  addFruit(newFruit){
    this.setState({
      fruits: [...this.state.fruits, newFruit]
    })
  }

  deleteFruit(id, index) {
    fetch(`http://localhost:8080/fruits/${id}`, {
      method: 'delete',
    }).then(this.setState((prevState) => ({
      fruits: prevState.fruits.filter((_, i) => i !== index)
    })))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Fruits!</h2>

        <FruitForm newFruitHandler={this.addFruit}/>

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
            {this.state.fruits.map((f, i) =>
              <tr key={f._id} className="d-flex">
                <th scope="row" className="col">{i + 1}</th>
                <td className="col">{f.name}</td>
                <td className="col">{f.taste}</td>
                <td className="col-1 p-0">
                  <button
                    className="btn h-100 float-right bg-danger fas fa-trash"
                    onClick={_ => this.deleteFruit(f._id, i)}>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
