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
      .then(fruits => this.setState({ fruits }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col">Taste</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fruits.map((f, i) =>
              <tr key={f._id}>
                <th scope ="row">{i + 1}</th>
                <td>{f.name}</td>
                <td>{f.color}</td>
                <td>{f.taste}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
