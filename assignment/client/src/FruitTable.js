import React from 'react';

const FruitTable = (props) => (
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
      {props.fruits.map((f, i) =>
        <tr key={f._id} className="d-flex">
          <th scope="row" className="col">{i + 1}</th>
          <td className="col">{f.name}</td>
          <td className="col">{f.taste}</td>
          <td className="col-1 p-0">
            <button
              className="btn h-100 float-right bg-danger fas fa-trash"
              onClick={_ => fetch(`http://localhost:8080/fruits/${f._id}`, {
                method: 'delete',
              }).then(props.deleteFruitHandler(i))
                .catch(err => console.error(err))}>
            </button>
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default FruitTable;
