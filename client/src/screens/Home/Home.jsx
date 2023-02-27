import './Home.css';
import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import Footer from '../../globals/Footer/Footer';

import FAQs from '../FAQs/FAQs';
import Pricing from '../../components/Pricing/Pricing';

import Handshake from '../../assets/handshake.svg'
import Tax from '../../assets/tax.svg'
import Rocket from '../../assets/rocket.svg'
import Legal from '../../assets/legal.svg'

function star() {
  return (
    <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.25671 0.518691C7.5317 -0.172898 8.46831 -0.172897 8.7433 0.518692L10.3664 4.60058C10.4823 4.89213 10.7444 5.09134 11.0453 5.11658L15.2582 5.46986C15.972 5.52972 16.2614 6.46148 15.7176 6.94876L12.5078 9.82479C12.2785 10.0302 12.1784 10.3525 12.2485 10.6597L13.2291 14.9599C13.3952 15.6885 12.6375 16.2644 12.0264 15.8739L8.41963 13.4667C8.16201 13.3021 7.838 13.3021 7.58038 13.4667L3.97359 15.8739C3.3625 16.2644 2.60477 15.6885 2.77091 14.9599L3.75154 10.6597C3.82159 10.3525 3.72146 10.0302 3.4922 9.82479L0.28245 6.94876C-0.261375 6.46148 0.0280543 5.52972 0.741834 5.46986L4.95469 5.11658C5.2556 5.09134 5.51772 4.89213 5.63365 4.60058L7.25671 0.518691Z" fill="#00BF8F"></path><path d="M25.2567 0.518691C25.5317 -0.172898 26.4683 -0.172897 26.7433 0.518692L28.3664 4.60058C28.4823 4.89213 28.7444 5.09134 29.0453 5.11658L33.2582 5.46986C33.972 5.52972 34.2614 6.46148 33.7176 6.94876L30.5078 9.82479C30.2785 10.0302 30.1784 10.3525 30.2485 10.6597L31.2291 14.9599C31.3952 15.6885 30.6375 16.2644 30.0264 15.8739L26.4196 13.4667C26.162 13.3021 25.838 13.3021 25.5804 13.4667L21.9736 15.8739C21.3625 16.2644 20.6048 15.6885 20.7709 14.9599L21.7515 10.6597C21.8216 10.3525 21.7215 10.0302 21.4922 9.82479L18.2824 6.94876C17.7386 6.46148 18.0281 5.52972 18.7418 5.46986L22.9547 5.11658C23.2556 5.09134 23.5177 4.89213 23.6337 4.60058L25.2567 0.518691Z" fill="#00BF8F"></path><path d="M43.2567 0.518691C43.5317 -0.172898 44.4683 -0.172897 44.7433 0.518692L46.3664 4.60058C46.4823 4.89213 46.7444 5.09134 47.0453 5.11658L51.2582 5.46986C51.972 5.52972 52.2614 6.46148 51.7176 6.94876L48.5078 9.82479C48.2785 10.0302 48.1784 10.3525 48.2485 10.6597L49.2291 14.9599C49.3952 15.6885 48.6375 16.2644 48.0264 15.8739L44.4196 13.4667C44.162 13.3021 43.838 13.3021 43.5804 13.4667L39.9736 15.8739C39.3625 16.2644 38.6048 15.6885 38.7709 14.9599L39.7515 10.6597C39.8216 10.3525 39.7215 10.0302 39.4922 9.82479L36.2824 6.94876C35.7386 6.46148 36.0281 5.52972 36.7418 5.46986L40.9547 5.11658C41.2556 5.09134 41.5177 4.89213 41.6337 4.60058L43.2567 0.518691Z" fill="#00BF8F"></path><path d="M61.2567 0.518691C61.5317 -0.172898 62.4683 -0.172897 62.7433 0.518692L64.3664 4.60058C64.4823 4.89213 64.7444 5.09134 65.0453 5.11658L69.2582 5.46986C69.972 5.52972 70.2614 6.46148 69.7176 6.94876L66.5078 9.82479C66.2785 10.0302 66.1784 10.3525 66.2485 10.6597L67.2291 14.9599C67.3952 15.6885 66.6375 16.2644 66.0264 15.8739L62.4196 13.4667C62.162 13.3021 61.838 13.3021 61.5804 13.4667L57.9736 15.8739C57.3625 16.2644 56.6048 15.6885 56.7709 14.9599L57.7515 10.6597C57.8216 10.3525 57.7215 10.0302 57.4922 9.82479L54.2824 6.94876C53.7386 6.46148 54.0281 5.52972 54.7418 5.46986L58.9547 5.11658C59.2556 5.09134 59.5177 4.89213 59.6337 4.60058L61.2567 0.518691Z" fill="#00BF8F"></path><path d="M79.2567 0.518691C79.5317 -0.172898 80.4683 -0.172897 80.7433 0.518692L82.3663 4.60058C82.4822 4.89213 82.7444 5.09134 83.0453 5.11658L87.2581 5.46986C87.9719 5.52972 88.2613 6.46148 87.7175 6.94876L84.5078 9.82479C84.2785 10.0302 84.1784 10.3525 84.2484 10.6597L85.229 14.9599C85.3952 15.6885 84.6375 16.2644 84.0264 15.8739L80.4196 13.4667C80.162 13.3021 79.838 13.3021 79.5804 13.4667L75.9736 15.8739C75.3625 16.2644 74.6048 15.6885 74.7709 14.9599L75.7515 10.6597C75.8216 10.3525 75.7214 10.0302 75.4922 9.82479L72.2824 6.94876C71.7386 6.46148 72.0281 5.52972 72.7418 5.46986L76.9547 5.11658C77.2556 5.09134 77.5177 4.89213 77.6336 4.60058L79.2567 0.518691Z" fill="#00BF8F"></path></svg>
  )
}

function Home() {
  return (
    <div className="main">
      <section className="search">
        <div className="content">
          <h1 className="heading">Search Lawyer, Make an Appointment</h1>
          <h5 className='sub-heading'>Discover the best lawyers nearest to you</h5>
          <div className="search-bar row g-1">
            <div className="col-md-4">
              <select className='form-select' aria-label='Select a location'>
                <option selected>Select a location</option>
                <option value="1">Dhaka</option>
                <option value="2">Chittagong</option>
                <option value="3">Barishal</option>
              </select>
            </div>
            <div className="col-md-6">
              <input type="text" className='form-control' placeholder='Search for lawyers' />
            </div>
            <div className="col-md-2">
              <button className='button'>Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="powerful-tools">
        <div className="container">
          <h1 className="heading">One powerful platform for all your needs!</h1>
          <div className="tool-cards">
              <div className="tools">
                <div className="tools-image">
                  <img src={Handshake} className='img-fluid' alt ='business registration'></img>
                </div>
                <p>Business Registration</p>
              </div>
              <div className="tools">
                <div className="tools-image">
                  <img src={Tax} className='img-fluid' alt ='business registration'></img>
                </div>
                <p>Taxation & Compliance</p>
              </div>
              <div className="tools">
                <div className="tools-image">
                  <img src={Rocket} className='img-fluid' alt ='business registration'></img>
                </div>
                <p>Startup Legal Consultancy</p>
              </div>
              <div className="tools">
                <div className="tools-image">
                  <img src={Legal} className='img-fluid' alt ='business registration'></img>
                </div>
                <p>Legal Documentation</p>
              </div>
          </div>
        </div>
      </section>

      <section className="experts">
        <div className="container">

          <h1 className="heading">Meet the experts</h1>

          <div className="slider">
            <Swiper navigation={true} modules={[Navigation]} className="expertSlider" spaceBetween={0} loop={true} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}>
              <SwiperSlide>
                <div className="slide">
                  <div className="lawyer-card">
                    <div className="picture">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile" className="img-fluid" />
                    </div>

                    <div className="lawyer-info">
                      <div className="name">John Doe, <span className='post'>Lawyer</span></div>
                      <div className="education">LL. B (Hons). Higher Prof. Dip. Law & Practice</div>
                      <div className="star">{star()}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <div className="lawyer-card">
                    <div className="picture">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile" className="img-fluid" />
                    </div>

                    <div className="lawyer-info">
                      <div className="name">John Doe, <span className='post'>Lawyer</span></div>
                      <div className="education">LL. B (Hons). Higher Prof. Dip. Law & Practice</div>
                      <div className="star">{star()}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <div className="lawyer-card">
                    <div className="picture">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile" className="img-fluid" />
                    </div>

                    <div className="lawyer-info">
                      <div className="name">John Doe, <span className='post'>Lawyer</span></div>
                      <div className="education">LL. B (Hons). Higher Prof. Dip. Law & Practice</div>
                      <div className="star">{star()}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="slide">
                  <div className="lawyer-card">
                    <div className="picture">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile" className="img-fluid" />
                    </div>

                    <div className="lawyer-info">
                      <div className="name">John Doe, <span className='post'>Lawyer</span></div>
                      <div className="education">LL. B (Hons). Higher Prof. Dip. Law & Practice</div>
                      <div className="star">{star()}</div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>

      <section className="timeline">
        <div className="container">

          <h1 className="heading">How it works</h1>

          <div className="timeline-item">
            <div className="milestone-left">
              <div className="vertical-divider-container">
                <div className="vertical-divider"></div>
              </div>
            </div>
            <div className="invite-subtitle">
              <h5>Step 1</h5>
              <p>Set up a Your Lawyer account and tell us what you need via our chatbot</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="milestone-left">
              <div className="vertical-divider-container">
                <div className="vertical-divider"></div>
              </div>
            </div>
            <div className="invite-subtitle">
              <h5>Step 2</h5>
              <p>We'll generate a free, verified quote based on your needs</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="milestone-left">
              <div className="vertical-divider-container">
                <div className="vertical-divider last"></div>
              </div>
            </div>
            <div className="invite-subtitle">
              <h5>Step 3</h5>
              <p>Find and hire the best lawyer!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h5>What our customers are saying</h5>
          <div className="review-cards">
            <div className="review-card image"></div>
            <div className="review-card">
              <div className="info">
                <div className="profile">BA</div>
                <div className="name">Badiul Alam</div>
              </div>
              <div className="review">“Received legal advice from Legal Expert Darass Abdullah. He was very quick to reply to my quarries and gave me a valuable legal explanation pertaining to my case.”</div>
              <div className='star'>{star()}</div>
            </div>

            <div className="review-card">
              <div className="info">
                <div className="profile">SI</div>
                <div className="name">Syed Imran</div>
              </div>
              <div className="review">“I received a quick response to my question from a qualified legal expert. Great service at a great price.”</div>
              <div className='star'>{star()}</div>
            </div>

            <div className="review-card">
              <div className="info">
                <div className="profile">SR</div>
                <div className="name">Sohel Rana</div>
              </div>
              <div className="review">“This is the best platform to get quick and hassle-free professional advice... I had reached out to few solicitors before but no one provided right advice. Then I found about Your Lawyer and within 12 hours I was able chat with legal expert and get the advice that I needed. Thanks Your Lawyer.”</div>
              <div>{star()}</div>
            </div>
          </div>
        </div>
      </section>

      <section className='faqs my-5'>
        <FAQs></FAQs>
      </section>

      <section className='home-pricing'>
        <Pricing />
      </section>

      <Footer />
    </div>
  )
}

export default Home;