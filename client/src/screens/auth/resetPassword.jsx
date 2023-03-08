import { Component } from "react";

import axios from 'axios';

import { withRouter } from '../../controllers/withRouter.js'

export default withRouter(class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      confirmPassword: '',
      error: null,
      success: false
    }

    let token = localStorage.getItem('token');
    if (token) window.location.href = '/'

    this.setNewPassword = this.setNewPassword.bind(this);
  }

  async setNewPassword(event) {
    event.preventDefault();

    this.setState({ error: null });

    if (this.state.password !== this.state.confirmPassword) return this.setState({ error: `Paswords don't match. Please check again!` });

    try {
      let resetToken = this.props.params.resetToken;

      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      let { data } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/auth/reset-password/${resetToken}`, { password: this.state.password }, config);

      if (data.success) {
        this.setState({ success: true });
        setTimeout(() => {
          this.props.navigate('/login')
        }, 3000)
      }
    } catch (error) {
      this.setState({ error: 'Password reset link expired. Please try again!' });
      console.log(error);
    }
  }

  render() {
    return (
      <div className="resetPassword auth">
        {this.state.success === false ? (
          <div className="container">
            {this.state.error ? (
              <div className="error">
                <h5>{this.state.error}</h5>
              </div>
            ) : null}
            <h1>Reset your password</h1>
            <form onSubmit={this.setNewPassword}>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" required value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} id="password" className="form-control" aria-describedby="password" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" required value={this.state.confirmPassword} onChange={(event) => this.setState({ confirmPassword: event.target.value })} id="confirm-password" className="form-control" aria-describedby="confirm-password" />
              </div>

              <div className="d-grid">
                <button className="button" type="submit">Submit</button>
              </div>

            </form>
          </div>
        ) : (
          <div className="container">
            <div className="successMessage">
              <p>Password has been reset successfully. Redirecting you to login page...</p>
            </div>
          </div>
        )}
      </div>
    )
  }
})