import { Component } from "react";
import axios from 'axios'

import { withRouter } from '../../controllers/withRouter.js';

import ErrorMessage from "../../components/ErrorMessage/errorMessage";

export default withRouter(class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      number: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }

    this.registerUser = this.registerUser.bind(this);
  }

  async registerUser(event) {
    event.preventDefault();

    this.setState({ error: null })

    console.log(this.state)
    
    if (this.state.password !== this.state.confirmPassword) return this.setState({  error: `Password doesn't match`});

    try {
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      let { data } = await axios.post('/api/auth/register', {
        name: this.state.name,
        phoneNumber: this.state.number,
        email: this.state.email,
        password: this.state.password
      }, config);

      if (data.success) {
        localStorage.setItem('token', data.token);
        window.location.href = '/'
      }
    } catch (error) {
      alert('Something went wrong please try again!');
    }

    console.log('register');
  }

  render() {
    return (
      <div className="register my-5">
        <div className="container d-flex justify-content-center">
          <div className="loginForm">
            {this.state.error ? <ErrorMessage message={this.state.error}></ErrorMessage> : null}
            <h5>Create an account</h5>
            <form onSubmit={this.registerUser}>

              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input required type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} id="firstName" className="form-control" aria-describedby="firstName" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input required type="email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} id="email" className="form-control" aria-describedby="email" />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input required type="phoneNumber" value={this.state.number} onChange={(event) => this.setState({number: event.target.value})} id="phoneNumber" className="form-control" aria-describedby="phoneNumber" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input required type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} id="password" className="form-control" aria-describedby="password" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input required type="password" value={this.state.confirmPassword} onChange={(event) => this.setState({confirmPassword: event.target.value})} id="confirm-password" className="form-control" aria-describedby="confirm-password" />
              </div>


              <div className="d-grid">
                <button className="button" type="submit">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
})