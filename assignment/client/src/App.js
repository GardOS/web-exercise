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

  createFruit() {
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

        <form onSubmit={e => {
          e.preventDefault();
          this.createFruit();
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
