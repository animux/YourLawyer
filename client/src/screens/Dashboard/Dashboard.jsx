import axios from "axios";
import { Component } from "react";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    axios.get('/api/private', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      this.setState({ data: response.data.data })
      console.log(this.state.data);
    })
  }
  
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="name">Name</div>
              <div className="name">{this.state.data.name}</div>
            </div>

            <div className="col-md-4">
              <div className="name">Email</div>
              <div className="name">{this.state.data.email}</div>
            </div>

            <div className="col-md-4">
              <div className="name">Phone Number</div>
              <div className="name">{this.state.data.phoneNumber}</div>
            </div>
          </div>

          <div className="heading">Services</div>
        </div>
      </div>
    )
  }
}