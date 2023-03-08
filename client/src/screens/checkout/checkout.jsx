import { Component } from "react";
import axios from 'axios';

import { withRouter } from '../../controllers/withRouter'

import './checkout.css'

export default withRouter(class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      service: '',
      totalAmount: 0
    }

    this.checkout = this.checkout.bind(this);
  };

  componentDidMount() {
    let service = this.props.params.service;
    if (service === 'daily') this.setState({ service: 'Get the support for 24 hours', totalAmount: 149 })
    else if (service === 'weekly') this.setState({ service: 'Get the support for 7 days', totalAmount: 649 })
    else if (service === 'monthly') this.setState({ service: 'Get the support for 30 days', totalAmount: 2499 })
  }

  async checkout(event) {
    event.preventDefault()

    if (this.state.service === '' || this.state.totalAmount === 0) window.location.href = '/pricing';

    let { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/payment`, { totalAmount: this.state.totalAmount, token: localStorage.getItem('token') });

    if (data.success) window.location.href = data.url
    else return;
  }

  render() {
    return (
      <div className="checkout">
        <div className="container">
          <div className="heading">Checkout</div>
          <div className="d-flex align-items-center justify-content-between serviceEnabled">
            <div className="service">{this.state.service}</div>
            <div className="amount">{this.state.totalAmount} BDT</div>
          </div>

          <div className="d-flex align-items-center justify-content-between serviceEnabled totalBill">
            <div className="total">Total</div>
            <div className="totalAmount">{this.state.totalAmount} BDT</div>
          </div>
          <div className="d-flex justify-content-end">
            <form onSubmit={this.checkout}>
              <button className="button" type="submit">Proceed to payment</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
})