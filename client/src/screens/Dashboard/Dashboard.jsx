import axios from "axios";
import { Component } from "react";

import './Dashboard.css'

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: '',
      serviceName: ''
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/private`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      this.setState({ data: response.data.data })
      console.log(this.state.data);
      if (this.state.data.amount === 149) return this.setState({ serviceName: '24 hours support'})
      else if (this.state.data.amount === 649) return this.setState({ serviceName: '7 days support'})
      else if (this.state.data.amount === 2499) return this.setState({ serviceName: '30 days support'})
      else return this.setState({ serviceName: 'No support'})
    })
  }
  
  render() {
    return (
      <div className="dashboard py-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="name">
              <h5>Name</h5>
              <p>{this.state.data.name}</p>
            </div>
            <div className="email">
              <h5>Email</h5>
              <p>{this.state.data.email}</p>
            </div>
            <div className="phoneNumber">
              <h5>Phone Number</h5>
              <p>{this.state.data.phoneNumber}</p>
            </div>
          </div>

          {(this.state.data.amount >= 149) ? (
            <div className="services">
              <div className="heading">Services</div>
              <div className="d-flex justify-content-between">
                <div className="supportDays">{this.state.serviceName}</div>
                <div className="amount">{this.state.data.amount} BDT</div>
              </div>
            </div>
          ) : null}

          {(this.state.data.bookingAmountPaid > 0) ? (
            <div className="appointments">
              <div className="heading">Appointments</div>
              <div className="d-flex justify-content-between">
                <div className="lawyer-name">{this.state.data.lawyerName}</div>
                <div className="amount">{this.state.data.bookingAmountPaid} BDT</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}