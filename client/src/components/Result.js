import React from 'react';
import './components.css';
import './Results.css';

const Result = props => {
  //console.log(props.list.length);

  return (
    <div className="w3-row w3-container-fluid">
      <table className="w3-table table-striped">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Image</th>
          </tr>
          {props.list.map(result => {
            return (
              <tr key={result.name}>
                <td>{result.name}</td>
                <td>{result.address}</td>
                <td>
                  <img src={result.photo_reference} width="100px" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
