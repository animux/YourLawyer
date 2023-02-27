import { Component } from "react";
import './errorMessage.css'

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className='errorMessage'>
        <p>{this.props.message}</p>
      </div>
    )
  }
}