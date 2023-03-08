import { Component } from "react";
import axios from 'axios'

import './FindLawyers.css'

import LawyerCard from '../../components/LawyerCard.jsx';

export default class FindLawyers extends Component {
  constructor() {
    super();

    this.state = {
      lawyers: []
    }

    this.filter = this.filter.bind(this)
    this.fetchLawyers = this.fetchLawyers.bind(this);
  }

  filter(event) {
    event.preventDefault();
  }

  filterOption() {
    return (
      <div className="filterForm">
        <div className="container">
          <h1 className="heading">Search Filter</h1>
          <form onSubmit={this.filter}>
            <div className="formFilter row g-1">

              <div className="col-md-5">
                <select className="form-select" aria-labelledby="Select a location">
                  <option defaultValue='Select a location'>Select a location</option>
                  <option>Bangladesh</option>
                </select>
              </div>

              <div className="col-md-5">
                <select className="form-select" aria-labelledby="Select the type of lawyer">
                  <option defaultValue='Select the type of lawyer'>Select the type of lawyer</option>
                  <option>Criminal Lawyer</option>
                </select>
              </div>

              <div className="col-md-2">
                <div className="d-grid">
                  <button className="button" type="submit">Search</button>
                </div>
              </div>
            </div>
          </form>
          
          
        </div>
      </div>
    )
  }

  async fetchLawyers() {
    let { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/lawyers`);
    this.setState({ lawyers: data });
  }

  componentDidMount() {
    this.fetchLawyers();
  }

  render() {
    return (
      <div className="findLawyers">
        {this.filterOption()}
        <div className="container">
          {
            this.state.lawyers.map((item, index) => (
              <LawyerCard lawyer_data={item} key={index}></LawyerCard>
            ))
          }
          
        </div>
      </div>
    )
  }
}