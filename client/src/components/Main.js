import React, { Component } from 'react';
import './Main.css';
// import travel from './travel';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Welcome to Travel</h1>
          <p>Things you need to know while traveling.</p>
        </div>

        <div className="container">
          <div className="row text-center">
            <h3>About Us</h3>
            <p>This website is to help you in prepare for a enjoyable holiday. Click on Search at the top of this page</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
