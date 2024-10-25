import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { data } from './team'

export default function About() {
    return (

        <div className="site-wrapper about-us-page">

            <Helmet>
                <title>About Us || AirNexus '24</title>
                <meta name="description" content="AirNexus'24 is designed to be the largest Arts, Cultural & Social  Olympiad of Pakistan hosted by renowned Air Universtiy. It will encourage the practical implementation of engineering and applied sciences through a range of Arts, Cultural & Social  events in the fields of mechatronics, mechanical, electrical, computer sciences & applied sciences." />
            </Helmet>

            <section className="about-us section-spacing">
                <div className=" about-us-inner container ">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="section-heading ">
                                <h6>ABOUT US</h6>
                                <h1>
                                    Welcome to AirNexus '24 – Where Innovation Takes Center Stage!
                                </h1>
                            </div>
                            <div className="about-us-content">
                                <p>
                                    Experience innovation at AirNexus '24, the largest Arts, Cultural & Social  Olympiad in Pakistan, hosted by Air University, in Islamabad. Elevate Arts, Cultural & Social  skills in diverse fields, embrace practical problem-solving, and enjoy collaborative social events. Join us in shaping the future of technology at this dynamic engineering showcase.
                                </p>
                                <div className="about-us-feature-list  gap-4 mt-5">
                                    <div className="flex-center justify-content-start">
                                        <img
                                            src="./images/tick.png"
                                            className="me-3"
                                            width="24px"
                                            alt=""
                                        />{" "}
                                        <span>Top Engineering Institute</span>
                                    </div>
                                    <div className="flex-center justify-content-start">
                                        <img
                                            src="./images/tick.png"
                                            className="me-3"
                                            width="24px"
                                            alt=""
                                        />{" "}
                                        <span>Annual Arts, Cultural & Social  Olympiad</span>
                                    </div>
                                    <div className="flex-center justify-content-start">
                                        <img
                                            src="./images/tick.png"
                                            className="me-3"
                                            width="24px"
                                            alt=""
                                        />{" "}
                                        <span>Diverse Arts, Cultural & Social  Fields</span>
                                    </div>
                                    <div className="flex-center justify-content-start ">
                                        <img
                                            src="./images/tick.png"
                                            className="me-3"
                                            width="24px"
                                            alt=""
                                        />{" "}
                                        <span>Skill Development and Motivation</span>
                                    </div>
                                </div>
                                <div className="about-us-content-footer d-flex align-items-center">
                                    <Link to="/contact-us" className="generic-btn-1">
                                        Our Rep Can Help You{" "}
                                        <img
                                            src="./images/arrow-right.png"
                                            width="25px"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="phone-logo-wrapper ms-5">
                                            <img src="./images/phone.png" width="19px" alt="" />
                                        </div>
                                        <a
                                            href=" https://wa.me/<number>"
                                            className="ms-2 fw-bold text-purple"
                                        >
                                            (+92) 317 5777584
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-us-img-wrapper px-5 flex-center">
                            <img src="./images/about-us-icon.svg" width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="vision section-spacing pt-0">
                <div className="vision-inner ">
                    <div className="vision-statement-parent ">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <div className="vision-image-grid-parent">
                                    <div className="container">
                                        <div className="vision-image-grid ">
                                            <img
                                                src="./images/founder-4.avif"
                                                width="100%"
                                                alt=""
                                            />
                                            <img
                                                src="./images/founder-2.avif"
                                                width="100%"
                                                alt=""
                                            />
                                            <img
                                                src="./images/founder-3.avif"
                                                width="100%"
                                                alt=""
                                            />
                                            <img
                                                src="./images/founder-1.avif"
                                                width="100%"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* 
            <section className="founder section-spacing pt-0">
                <div className="container">
                    <div className="section-heading mb-5">
                        <h6>OUR TEAM</h6>
                        <h1>About Our Team</h1>
                    </div>
                    <div className="founder-card-wrapper row ">
                        {data.map((index, iter) => (
                            <div key={iter} className="founder-card col-md-6 my-4">
                                <a
                                    className="founder-img-wrapper"
                                    href={index.linkedin || index.facebook || index.instagram || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="founder-img-inner">
                                        <img src={index.imgSrc} alt="" />
                                    </div>
                                </a>
                                <h3 className="mt-4">{index.name}</h3>
                                <h5 className="text-blue">{index.role}</h5>
                                <div className='mt-1 mb-1' style={{ display: 'flex' }}>
                                    {
                                        index.linkedin &&
                                        <a
                                            style={{ marginLeft: '5px', marginRight: '5px' }}
                                            className="social-wrapper"
                                            href={index.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="././images/linkedin-blue.png"
                                                width="20px"
                                                alt=""
                                            />
                                        </a>
                                    }

                                    {
                                        index.facebook &&
                                        <a
                                            style={{ marginLeft: '5px', marginRight: '5px' }}
                                            className="social-wrapper"
                                            href={index.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="././images/facebook.png"
                                                width="20px"
                                                alt=""
                                            />
                                        </a>
                                    }

                                    {
                                        index.instagram &&
                                        <a
                                            style={{ marginLeft: '5px', marginRight: '5px' }}
                                            className="social-wrapper"
                                            href={index.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="./images/instagram.png"
                                                width="20px"
                                                alt=""
                                            />
                                        </a>
                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section> */}
        </div>

    )
}
