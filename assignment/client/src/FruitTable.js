import React, { Component } from 'react';

class FruitTable extends Component {
  constructor() {
    super();

    this.state = {
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

  filterFruits() {
    return this.props.fruits.filter(
      fruit =>
        (this.state.nameFilter === "" || fruit.name.toLowerCase().startsWith(this.state.nameFilter.toLowerCase())) &&
        (this.state.tasteFilter === "" || fruit.taste === this.state.tasteFilter)
    )
  }

  resetFilter() {
    this.setState({ nameFilter: "" });
    this.setState({ tasteFilter: "" });
    document.getElementById("nameHeader").value = "";
    document.getElementById("tasteHeader").value = "";
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead className="thead">
          <tr className="d-flex">
            <th className="col p-0">
              <input
                id="nameHeader"
                type="text"
                className="form-control h-100 bg-light border-light rounded-0"
                placeholder="Name.."
                onChange={e => this.setState({ nameFilter: e.target.value })} />
            </th>
            <th className="col p-0">
              <select
                id="tasteHeader"
                className="form-control h-100 bg-light border-light rounded-0"
                onChange={e => this.setState({ tasteFilter: e.target.value })}>
                <option value="" defaultValue>Taste..</option>
                <option value="Good">Good</option>
                <option value="OK">OK</option>
                <option value="Bad">Bad</option>
              </select>
            </th>
            <th className="col-1 p-0">
              <button
                className="btn btn-block h-100 bg-secondary fas fa-times text-light"
                onClick={_ => this.resetFilter()}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.filterFruits().map((f, i) =>
            <tr key={f._id} className="d-flex">
              <td className="col">{f.name}</td>
              <td className="col">{f.taste}</td>
              <td className="col-1 p-0">
                <button
                  className="btn btn-block h-100 bg-danger fas fa-trash text-light"
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
