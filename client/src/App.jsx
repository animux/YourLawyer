import './App.css';

import jwt_decode from 'jwt-decode'
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Protected from './controllers/Protected';

import Navbar from './globals/Navbar/Navbar.jsx'

import Home from './screens/Home/Home.jsx';
import FAQs from './screens/FAQs/FAQs.jsx';
import TC from './screens/TC/TC';
import PP from './screens/PPolicy/PP.jsx';
import AboutUs from './screens/About Us/AboutUs';
import ContactUs from './screens/ContactUs/ContactUs';
import Pricing from './screens/Pricing/Pricing';
import FindLawyers from './screens/FindLawyers/FindLawyers';

import Login from './screens/auth/login';
import Register from './screens/auth/register';

import Checkout from './screens/checkout/checkout.jsx'
import ConfirmPayment from './screens/auth/confirmPayment';

import Dashboard from './screens/Dashboard/Dashboard';

import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default class App extends Component {
  constructor() {
    super();

    this.checkAuth = this.checkAuth.bind(this)
  }

  checkAuth() {
    try {
      let token = localStorage.getItem('token');
      if (token) {
        let decoded = jwt_decode(token);
        let current_time = Date.now() / 1000;

        if (decoded.exp < current_time) localStorage.removeItem('token');

        if (decoded.amount > 0) return true
        else return false;
      }
    } catch (error) {
      localStorage.removeItem('token')
    }
    
  }

  render() {
    return (
      <div className="App">

      <BrowserRouter>
        <Navbar />
        { (this.checkAuth()) ? <TawkMessengerReact propertyId="61e08179b84f7301d32ae4fe" widgetId="1fpafjh9f"></TawkMessengerReact> : null }
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/disclaimer" element={<TC />} />
          <Route exact path='/packages' element={<Pricing />}></Route>
          <Route exact path='/privacy-policy' element={<PP />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/contact-us' element={<ContactUs />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/checkout/:service' element={<Checkout />}></Route>
          <Route exact path='/confirm-payment' element={Protected(ConfirmPayment)}></Route>

          <Route exact path='/findlawyers' element={<FindLawyers />}></Route>

          <Route exact path='/dashboard' element={Protected(Dashboard)}></Route>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

      </div>
    )
  }
}