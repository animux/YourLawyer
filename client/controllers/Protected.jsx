import { Component } from "react";
import { Navigate } from 'react-router-dom'

export default function(ComposedComponent) {
  class Protected extends Component {
    state = {
      isAuthenticated: false
    }

    render() {
      return localStorage.getItem('token') !== null ? <ComposedComponent {...this.props}></ComposedComponent> : <Navigate to='/login'></Navigate>
    }
  }

  return <Protected></Protected>;
}