import FooterSSL from '../../assets/Footer-SSL.png';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
    return (
        <div className="footer pt-4">

            <div className="footer-text container border-btm">
                <div className='text-center'>
                    <div className="row">
                        <div className="col mt-1"><Link to="/about-us" className="nav-link">About Us</Link></div>
                        <div className="col mt-1"><a href="/faqs" className="nav-link">FAQs</a></div>
                        <div className="col mt-1"><a href="/disclaimer" className="nav-link">Disclaimer</a></div>
                        <div className="col mt-1"><a href="/privacy-policy" className="nav-link">Privacy Policy</a></div>
                        <div className="col mt-1"><Link to="/contact-us" className="nav-link">Contact Us</Link></div>
                    </div>
                </div>
            </div>

            <div className="text-center container border-btm">
                <img src={FooterSSL} alt="SSLCommerz" width="100%" />
            </div>


            <div className="footer-text">
                 <div className="copyright text-center p-4">
                    <p>2023 &copy; YourLawyer. All Rights Reserved </p>
                </div>
            </div>

        </div>
    )
}

export default Footer;