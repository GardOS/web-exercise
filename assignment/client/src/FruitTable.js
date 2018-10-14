import React, { Component } from 'react';

class FruitTable extends Component {
  constructor() {
    super();

    this.state = {
      indexFilter: null,
      nameFilter: null,
      tasteFilter: null
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
              <input className="form-control h-100 bg-light border-light rounded-0" placeholder="Index.." />
            </th>
            <th className="col p-0">
              <input className="form-control h-100 bg-light border-light rounded-0" placeholder="Name.." />
            </th>
            <th className="col p-0">
              <select className="form-control h-100 bg-light border-light rounded-0">
                <option value={null} defaultValue>Taste..</option>
                <option value="Good">Good</option>
                <option value="OK">OK</option>
                <option value="Bad">Bad</option>
              </select>
            </th>
            <th className="col-1 p-0">
              <button className="btn btn-block h-100 bg-secondary fas fa-times"></button>
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
