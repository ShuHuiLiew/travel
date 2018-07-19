import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import Result from './Result';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      addr: '',
      name: '',
      placetype: '',
      errors: {},
      result: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newQuery = {
      address: this.state.addr,
      name: this.state.name,
      placetype: this.state.placetype
    };

    axios.post('/getplaces', qs.stringify(newQuery))
      .then(result => {
        this.setState({ result: result.data });
      })
      .catch(err => {
        //console.log(error.response.data);
        this.setState({ errors: err.response.data });
      });
  }

  render() {
    return (
      <div>
        <div className="w3-jumbotron w3-text-center">
          <h1>Search Page</h1>
          <p>For searching the place you like.</p>
        </div>

        <div className="w3-container w3-fluid">
          <div className="w3-col-sm-8 w3-col-sm-offset-2">
            <form onSubmit={this.onSubmit}>
              <div className="w3-form-group">
                <label htmlFor="addr">Enter address:</label>
                <input
                  id="addr"
                  name="addr"
                  className="w3-form-control"
                  type="text"
                  placeholder="Enter address..."
                  value={this.state.addr}
                  onChange={this.onChange}
                />
                <p />
                     <label htmlFor="name">Enter name:</label>
                     <input
                       id="name"
                       name="name"
                       className="form-control"
                       type="text"
                       placeholder="Enter name..."
                       value={this.state.name}
                       onChange={this.onChange}
                     />
                     <p />
                <label htmlFor="placetype">Select type of place:</label>
                <p />
                <select
                  id="placetype"
                  name="placetype"
                  className="form-control"
                  value={this.state.placetype}
                  onChange={this.onChange}
                >

                  <option value="airport">airport</option>
                  <option value="amusement_park">amusement_park</option>
                  <option value="aquarium">aquarium</option>
                  <option value="art_gallery">art_gallery</option>
                  <option value="atm">atm</option>
                  <option value="bakery">bakery</option>
                  <option value="bank">bank</option>
                  <option value="bar">bar</option>
                  <option value="beauty_salon">beauty_salon</option>
                  <option value="bowling_alley">bowling_alley</option>
                  <option value="bus_station">bus_station</option>
                  <option value="cafe">cafe</option>
                  <option value="campground">campground</option>
                  <option value="casino">casino</option>
                  <option value="cemetery">cemetery</option>
                  <option value="church">church</option>
                  <option value="city_hall">city_hall</option>
                  <option value="clothing_store">clothing_store</option>
                  <option value="gym">gym</option>
                  <option value="hair_care">hair_care</option>
                  <option value="locksmith">locksmith</option>
                  <option value="lodging">lodging</option>
                  <option value="meal_delivery">meal_delivery</option>
                  <option value="mosque">mosque</option>
                  <option value="movie_rental">movie_rental</option>
                  <option value="museum">museum</option>
                  <option value="night_club">night_club</option>

                  <option value="spa">spa</option>
                  <option value="stadium">stadium</option>
                  <option value="storage">storage</option>
                  <option value="store">store</option>
                  <option value="subway_station">subway_station</option>
                  <option value="supermarket">supermarket</option>
                  <option value="synagogue">synagogue</option>
                  <option value="taxi_stand">taxi_stand</option>
                  <option value="train_station">train_station</option>
                  <option value="transit_station">transit_station</option>
                  <option value="travel_agency">travel_agency</option>
                  <option value="veterinary_care">veterinary_care</option>
                  <option value="zoo">zoo</option>
                </select>
                <p />
                <input type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
        <Result list={this.state.result} />
      </div>
    );
  }
}

export default Form;
