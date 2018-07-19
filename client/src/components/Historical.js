import React, { Component } from 'react';
import axios from 'axios';

class Historical extends Component {
  constructor() {
    super();
    this.state = {
      addr: '',
      name: '',
      placetype: '',
      errors: {},
      result: [
        {
          address: '',
          name: '',
          photo_reference: ''
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ result: [] });
    axios
      .post('/delete')
      .then(result => {
        console.log('All docs deleted');
      })
      .catch(error => {
        console.log('Failed to delete all: ', error);
      });
  }

  componentDidMount() {
    axios
      .post('/historical')
      .then(result => {
        this.setState({ result: result.data });
      })
      .catch(error => {
        console.log('error+++++ >:', error);
      });
  }

  render() {
    return (
      <div>
        <div className="w3-jumbotron w3-text-center">
          <h1>Historical Searches</h1>
          <p>Previous search results</p>
        </div>
        <div className="w3-row w3-container-fluid">
          <div className="w3-col-md-4 w3-text-center">
            <button
              className="w3-btn w3-btn-primary w3-btn-lg"
              onClick={this.handleClick}
            >
              Delete All
            </button>
            <p />
          </div>
          <table className="w3-table w3-table-striped">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Image</th>
              </tr>
              {this.state.result.map(result => {
                return (
                  <tr key={result.name}>
                    <td>{result.name}</td>
                    <td>{result.address}</td>
                    <td>
                      <img src={result.photo_reference} width="150px" height="150px" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Historical;
