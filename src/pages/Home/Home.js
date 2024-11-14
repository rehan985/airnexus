import React, { useEffect } from 'react'
import './Home.css'
import Slider from 'react-slick'
import chevronLeft from './../../images/chevron-left.png'
import chevronRight from './../../images/chevron-right.png'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
// Event category data with names and icons
const categories = [
  { name: 'Islamic Competitions', icon: "https://www.shareicon.net/download/2017/05/09/885860_islamic_512x512.png" },
  { name: 'Entrepreneurial Activities', icon: 'https://cdn-icons-png.flaticon.com/512/4101/4101949.png' },
  { name: 'EGames Competitions', icon: './images/sports.svg' },
  { name: 'Literary Competitions', icon: './images/solar.svg' },
  { name: 'Medigraphy Competitions', icon: 'https://cdn-icons-png.flaticon.com/512/8567/8567683.png' },
  { name: 'Performing Arts Competitions', icon: './images/pcb-illustration.svg' },
  { name: 'Mental Wellbeing Activities', icon: 'https://cdn-icons-png.flaticon.com/512/3475/3475728.png' },
  { name: 'Musical Competitions', icon: 'https://static-00.iconduck.com/assets.00/music-notes-icon-2048x2046-o5kli2nk.png' },
  { name: 'IT and Computing Competitions', icon: './images/computer-illustration.svg' },
  { name: 'Outdoor Sports Competitions', icon: './images/sports.svg' },
  { name: 'Indoor Sports Competitions', icon: './images/sports.svg' },
  { name: 'Robotic Competitions', icon: './images/math-illustration.svg' },
  { name: 'Social Events', icon: 'https://image.pngaaa.com/552/5670552-middle.png' },
  { name: 'Air Nexus Junior Competitions', icon: 'https://image.pngaaa.com/552/5670552-middle.png' },
  { name: 'Personal Wellbeing Competitions', icon: 'https://cdn-icons-png.flaticon.com/512/3213/3213090.png' }
];

export default function Home() {
  let partnerShipSettings = {
    autoplay: true,
    arrows: true,
    responsive: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    nextArrow: (
      <button type="button" className="slick-next">
        <img src={chevronRight} alt="next arrow" />
      </button>
    ),
    prevArrow: (
      <button type="button" className="slick-prev">
        <img src={chevronLeft} alt="prev arrow" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  document.title = "AirNexus '24";

  return (
    <div className="site-wrapper home-page">
      <section className="banner-area py-0 mb-5" data-aos="fade-in">
        <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={3000}>
              <div className="carousel-item-content" style={{ backgroundImage: 'url(./images/temp1.jpg)' }}>
                <div className="carousel-item-content-inner">
                  <div className="container">
                    <h1 className="text-white fw-bolder">AirNexus '24</h1>
                    <h1 className="text-white f-light fw-bolder">Pakistan's largest Arts, Cultural & Social Olympiad</h1>
                    <p className="text-white my-5 d-none d-md-block" style={{ maxWidth: '70ch' }}>
                      AirNexus '24 is designed to be the largest Arts, Cultural & Social Olympiad of Pakistan...
                    </p>
                    <div className="d-flex gap-4">
                      <Link to="/events" className="generic-btn-1 mt-4">View Events</Link>
                      <a className="generic-btn-1 mt-4" href="https://qrfy.io/GGUEZAt3QE">Register Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section for Event Categories */}
      <section className="services section-spacing pt-5">
        <div className="services-inner container">
          <div className="section-heading text-center">
            <h6>Competition Categories</h6>
            <h1>Explore Event Categories</h1>
          </div>
          <div className="services-grid mt-5">
            {categories.map((category, index) => (
              <div key={index} className="service-card" data-aos="fade-in" data-aos-duration={800}>
                <div className="service-card-inner">
                  <img src={category.icon} width="100px" alt={`${category.name} icon`} />
                  <h4 className="fw-bold mt-3 text-purple mt-4">{category.name}</h4>
                  <Link className="generic-btn-1 mt-4 mx-auto w-50" to="/events">
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="services section-spacing pt-5">
  <div className="services-inner container">
    <div className="section-heading text-center">
      <h6>Our Partnerships</h6>
      <h1>Corporate Partnerships</h1>
    </div>
    <div className="services-slider mt-5">
      <Slider {...partnerShipSettings}>
        <div className="partner-showcase-item">
          <img src="./images/partner3.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./images/aubbs.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./images/partner2.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./airLogos/airLogo1.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./airLogos/airCsy.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./airLogos/airAusom.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./images/partner1.png" width="120px" alt="partner" />
        </div>
        <div className="partner-showcase-item">
          <img src="./airLogos/airVector.png" width="120px" alt="partner" />
        </div>
      </Slider>
    </div>
  </div>
</section>


      <ContactBanner />
    </div>
  );
}
