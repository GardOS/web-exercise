import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
      inputName: null,
      inputTaste: null
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
        <h2>Fruits!</h2>

        <form onSubmit={e => {
          e.preventDefault();

          fetch('http://localhost:8080/fruits', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.inputFruit,
              taste: this.state.inputTaste,
            }),
          }).then(res => res.json())
            .then(savedFruit => {
              this.setState({
                fruits: [...this.state.fruits, savedFruit]
              })
            })
            .catch(err => console.error(err));
        }}>
          <div className="form-row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={e => this.setState({ inputFruit: e.target.value })} />
            </div>
            <div className="col">
              <select
                className="form-control"
                onChange={e => this.setState({ inputTaste: e.target.value })}>
                <option selected disabled hidden>Taste</option>
                <option value="Good">Good</option>
                <option value="OK">OK</option>
                <option value="Bad">Bad</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-primary btn-block">Create</button>
            </div>
          </div>
        </form>

        <br />

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
                <th scope="row">{i + 1}</th>
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
