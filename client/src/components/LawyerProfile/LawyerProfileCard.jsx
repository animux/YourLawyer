import { Component } from "react";

import './LawyerProfileCard.css'

export default class LawyerProfileCard extends Component {
  constructor() {
    super();
    
    this.checkAuthBook = this.checkAuthBook.bind(this)
  }

  componentDidMount() {
    this.setState({ data: this.props.lawyer_data })
  }

  checkAuthBook() {
    if (!localStorage.getItem('token')) return window.location.href = '/register'
    else return window.location.href = `/lawyers/appointment/${this.props.lawyer_data._id}`
  }

  render() {
    return (
      <div className="lawyerProfileCard">
        <div className="lawyerInfo">
          <div className="image">
            <img src="https://www.jacksonwhitelaw.com/wp-content/uploads/2022/05/attorney-jared-everton-500.jpg" alt="lawyer" />
          </div>
          <div className="info">
            <h3 className="name">{this.props.lawyer_data.name}</h3>
            <div className="occupation">{this.props.lawyer_data.lawyer_type}</div>
          </div>
          <div className="appointment">
            <div className="appointmentFee">{this.props.lawyer_data.appointmentFee} BDT</div>
            <button onClick={this.checkAuthBook} className="button">Book an appointment</button>
          </div>
        </div>

        <div className="overview">
          <h1>Overview</h1>
          <div className="about">
            <h3>About "{this.props.lawyer_data.name}"</h3>
            <p>{this.props.lawyer_data.about}</p>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            <ul className="experience-list">
              
              {this.props.lawyer_data.experience?.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="experience-user"><div className="before-circle"></div></div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <div className="post">{item.post}</div>
                        <div className="workplace">{item.workplace}</div>
                        {item.details?.map((i, ind) => {
                          return <p className="details" key={ind}>{ind + 1}) {i}</p>
                        })}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="education">
            <h3>Education</h3>
            <ul className="experience-list">
              {this.props.lawyer_data.education?.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="experience-user"><div className="before-circle"></div></div>
                    <div className="experience-content">
                      <div className="timeline-content">
                        <div className="post">{item.degree}</div>
                        <div className="workplace">{item.institute}</div>
                        <div className="subject">{item.subject}</div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="language">
            <h3>Languages</h3>
            {this.props.lawyer_data.languages?.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </div>
        </div>
      </div>
    )
  }
}