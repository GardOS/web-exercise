import React, { Component } from 'react';

class FruitForm extends Component {
  constructor() {
    super();

    this.state = {
      inputName: "",
      inputTaste: ""
    };
  }

  createFruit() {
    fetch('http://localhost:8080/fruits', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.inputName,
        taste: this.state.inputTaste,
      }),
    }).then(res => res.json())
      .then(savedFruit => {
        this.props.newFruitHandler(savedFruit)
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <form className="needs-validation" onSubmit={e => {
        e.preventDefault();
        this.createFruit();
      }}>
        <div className="form-row">
          <div className="col-5">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={e => this.setState({ inputName: e.target.value })} />
          </div>
          <div className="col">
            <select
              required
              className="form-control"
              onChange={e => this.setState({ inputTaste: e.target.value })}>
              <option value="" defaultValue hidden>Taste</option>
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
    );
  }
}

export default FruitForm;
