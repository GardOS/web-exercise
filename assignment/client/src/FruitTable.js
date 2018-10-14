import React, { Component } from 'react';

class FruitTable extends Component {
  constructor() {
    super();

    this.state = {
      indexFilter: "",
      nameFilter: "",
      tasteFilter: ""
    };
  }

  deleteFruit(id, index) {
    fetch(`http://localhost:8080/fruits/${id}`, {
      method: 'delete',
    }).then(this.props.deleteFruitHandler(index))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead className="thead">
          <tr className="d-flex">
            <th className="col p-0">
              <input
                type="text"
                className="form-control h-100 bg-light border-light rounded-0"
                placeholder="Index.."
                onChange={e => this.setState({ indexFilter: e.target.value })} />
            </th>
            <th className="col p-0">
              <input
                type="text"
                className="form-control h-100 bg-light border-light rounded-0"
                placeholder="Name.."
                onChange={e => this.setState({ nameFilter: e.target.value })} />
            </th>
            <th className="col p-0">
              <select
                className="form-control h-100 bg-light border-light rounded-0"
                onChange={e => this.setState({ tasteFilter: e.target.value })}>
                <option value="" defaultValue>Taste..</option>
                <option value="Good">Good</option>
                <option value="OK">OK</option>
                <option value="Bad">Bad</option>
              </select>
            </th>
            <th className="col-1 p-0">
              <button className="btn btn-block h-100 bg-secondary fas fa-times"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.fruits.map((f, i) =>
            <tr key={f._id} className="d-flex">
              <th scope="row" className="col">{i + 1}</th>
              <td className="col">{f.name}</td>
              <td className="col">{f.taste}</td>
              <td className="col-1 p-0">
                <button
                  className="btn btn-block h-100 bg-danger fas fa-trash"
                  onClick={_ => this.deleteFruit(f._id, i)}>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default FruitTable;
