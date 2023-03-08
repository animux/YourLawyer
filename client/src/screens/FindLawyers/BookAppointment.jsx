import { Component } from "react";
import axios from 'axios'

import { withRouter } from "../../controllers/withRouter";

import './BookAppointment.css'

export default  withRouter(class BookAppointment extends Component {
  
  constructor() {
    super();

    this.state = {
      data: ''
    }

    this.bookAppointment = this.bookAppointment.bind(this)
  }

  async fetchLawyerByID() {
    let id = this.props.params.id;

    if (!id) this.props.navigate('/findlawyers')

    let { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/lawyers/get?id=${id}`);

    if (data) this.setState({ data: data })
  }

  async bookAppointment(event) {
    event.preventDefault();
    
    if (!localStorage.getItem('token')) return window.location.href = '/register';
    else {

      try {
        let config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
  
        let { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/lawyers/book`, {
          lawyerID: this.state.data._id,
          token: localStorage.getItem('token')
        }, config)
  
        if (data.success) return window.location.href = data.url;
        else {
          alert('You already have a booking')
          return window.location.href = '/dashboard'
        }
      } catch (error) {
        alert('You already have a booking')
        window.location.href = '/dashboard'
      }
    }
  }

  componentDidMount() {
    this.fetchLawyerByID();
  }
  
  render() {
    return (
      <div className="book">
        <div className="container">
          <div className="heading">Book an appointment</div>
          <div className="d-flex align-items-center justify-content-between serviceEnabled">
            <div className="service">{this.state.data.name}</div>
            <div className="amount">{this.state.data.appointmentFee} BDT</div>
          </div>

          <div className="d-flex align-items-center justify-content-between serviceEnabled totalBill">
            <div className="total">Total</div>
            <div className="totalAmount">{this.state.data.appointmentFee} BDT</div>
          </div>
          <div className="d-flex justify-content-end">
            <form onSubmit={this.bookAppointment}>
              <button className="button" type="submit">Proceed to payment</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})