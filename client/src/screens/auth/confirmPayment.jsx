import { Component } from "react";
import axios from "axios";

export default class ConfirmPayment extends Component {
  constructor() {
    super();

    this.getNewToken = this.getNewToken.bind(this);
  }

  async getNewToken() {
    const token = localStorage.getItem('token');
    
    let { data } = await axios.post('http://api.askyourlawyer.io/api/auth/get-token', { token }, {  
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (data.success) {
      console.log('new token')
      localStorage.setItem('token', data.newToken);
      window.location.href = '/'
    } else {
      localStorage.removeItem('token')
      window.location.href = '/'
    }
  }

  render() {
    return this.getNewToken();
  }
}