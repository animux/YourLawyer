import { Component } from "react";
import { Navigate } from 'react-router-dom'
import jwtDecode from "jwt-decode";

export default function(ComposedComponent) {
  class Protected extends Component {
    state = {
      isAuthenticated: false
    }

    checkAuth() {
      try {
        let token = localStorage.getItem('token');
        if (token) {
          let decoded = jwtDecode(token);
          let current_time = Date.now() / 1000;
  
          if (decoded.exp < current_time) {
            localStorage.removeItem('token')
            return false
          } else return true
        }
      } catch (error) {
        localStorage.removeItem('token')
      }
    }

    render() {
      return this.checkAuth() ? <ComposedComponent {...this.props}></ComposedComponent> : <Navigate to='/login'></Navigate>
    }
  }

  return <Protected></Protected>;
}