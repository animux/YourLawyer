import { Component } from "react";
import axios from 'axios'

import './login.css'

export default class Login extends Component {

  constructor() {
    super();

    let token = localStorage.getItem('token');
    if (token) window.location.href = '/';

    this.state = {
      email: '',
      password: ''
    }

    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    event.preventDefault();

    try {
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      let { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, { email: this.state.email, password: this.state.password }, config);
      console.log(data);

      if (data.success) {
        localStorage.setItem('token', data.token);
        window.location.href = '/'
      }
    } catch (error) {
      alert('Please check your email or password')
    }
  }

  render() {
    return (
      <div className="sign-in">
        <div className="container d-flex justify-content-center">
          <div className="loginForm">
            <h5>Login to Your Lawyer</h5>
            <form onSubmit={this.submit}>
              <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} className="form-control mb-3" placeholder="Email address" />
              <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} className="form-control mb-3" placeholder="Password"/>
              <div className="d-grid">
                <button className="button" type="submit">Submit</button>
              </div>
            </form>

            <div className="bottom-form-link">
              <ul>
                <li><a href="/">Can't Sign in?</a></li>
                <li><a href="/">Sign up for an account</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}