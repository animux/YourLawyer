import { Component } from "react";
import { Link } from "react-router-dom";

import './Pricing.css'

export default class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <div className="container">
          <h3>Select your plan</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="price-card">
                <div className="price-title">Daily</div>
                <p>Get the support for 24 hours</p>
                <div className="price">149 <span className="currency">BDT</span></div>
                <div className="d-grid">
                  <Link to='/checkout/daily' className="button">Get Started</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="price-card light">
                <div className="price-title">Weekly</div>
                <p>Get the support for 7 days</p>
                <div className="price">649 <span className="currency">BDT</span></div>
                <div className="d-grid">
                  <Link to='/checkout/weekly' className="button">Get Started</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="price-card">
                <div className="price-title">Monthly</div>
                <p>Get the support for 30 days</p>
                <div className="price">2499 <span className="currency">BDT</span></div>
                <div className="d-grid">
                  <Link to='/checkout/monthly' className="button">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}