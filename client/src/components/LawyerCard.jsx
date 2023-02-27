import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLocationDot, faMoneyBill, faClipboard } from '@fortawesome/free-solid-svg-icons'

import './LawyerCard.css';

export default class LawyerCard extends Component {
  render() {
    return (
      <div className="lawyercard">
        <div className="image">
          <img src="https://www.jacksonwhitelaw.com/wp-content/uploads/2022/05/attorney-jared-everton-500.jpg" alt="Lawyer" />
        </div>
        <div className="info">
          <div className="name">{this.props.lawyer_data.name}</div>
          <div className="occupation">{this.props.lawyer_data.lawyer_type}</div>
          <div className="about">{this.props.lawyer_data.about}</div>
          <div className="location"><span><FontAwesomeIcon icon={faLocationDot} size={"1x"}></FontAwesomeIcon></span>{this.props.lawyer_data.nationality}</div>
        </div>
        <div className="details">
          <div className="appointmentFee"><FontAwesomeIcon className="icon" icon={faMoneyBill} size={'lg'}></FontAwesomeIcon>{this.props.lawyer_data.appointmentFee}</div>
          <div className="availability"><FontAwesomeIcon className="icon" icon={faClipboard} size={'lg'}></FontAwesomeIcon> Available</div>
          <button className="button">View Profile</button>
        </div>
      </div>
    )
  }
}