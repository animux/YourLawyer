import { Component } from "react";

import axios from 'axios'

import './login.css'

export default class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      success: false
    }

    this.sendMail = this.sendMail.bind(this);
  }

  async sendMail(event) {
    event.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/forgot-password`, { email: this.state.email }, config);

    if (data.success) this.setState({ success: true });
    console.log(this.state.email)
  }
  
  render() {
    return (
      <div className="forgotPassword">
        <div className="container">
          {(this.state.success) ?  (
            <div className="success">
              <h2>Please check your email</h2>
            </div>
          ) : (
            <div className="form">
            <h3>Forgot Password</h3>
            <form onSubmit={this.sendMail}>
              <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} className="form-control mb-3" placeholder="Email address" />
              <div className="d-grid">
                <button className="button" type="submit">Submit</button>
              </div>
            </form>
          </div>
          )}
          
        </div>
      </div>
    )
  }
}