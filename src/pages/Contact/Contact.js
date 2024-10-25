import React , { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

export default function Contact() {

  return (
    <div className="site-wrapper contact-page">
        <Helmet>
            <title>Contact Us || AirTech '24</title>
            <meta name="description" content="Contact Airtech '24 representatives" />
        </Helmet>
        <section className="contact-us-parent section-spacing">
            <div className="contact-us-inner container">
            <div className="section-heading text-center">
                <h6>NEED HELP?</h6>
                <h1>Get In Touch With us</h1>
            </div>
            <div className="contact-us-content mt-5">
                <div className="row">
                <div className="col-12">
                    <div className="contact-us-highlights">
                    <div className="contact-us-highlight-item">
                        <div className="rounded-circle-50 mb-4">
                        <img src="./images/linkedin.png" width="25px" alt="" />
                        </div>
                        <h5 className="mb-3 text-purple fw-bold">Linkedin Page</h5>
                        <a
                        className="text-gray"
                        href="https://www.linkedin.com/company/airtech2024/"
                        >
                        linkedin.com/airtech2024
                        </a>
                    </div>
                    <div className="contact-us-highlight-item">
                        <div className="rounded-circle-50 mb-4">
                        <img
                            src="./images/phone-white.png"
                            width="25px"
                            alt=""
                        />
                        </div>
                        <h5 className="mb-3 text-purple fw-bold">Call Us</h5>
                        <a className="text-gray" href="tel:+923175777584">
                        051 9153275<br />
                        +92 317 5777584 
                        </a>
                    </div>
                    <div className="contact-us-highlight-item">
                        <div className="rounded-circle-50 mb-4">
                        <img src="./images/email.png" width="25px" alt="" />
                        </div>
                        <h5 className="mb-3 text-purple fw-bold">Email</h5>
                        <a className="text-gray" href="mailto:Info@airtech.pk">
                        Info@airtech.pk
                        </a>
                    </div>
                    <div className="contact-us-highlight-item">
                        <div className="rounded-circle-50 mb-4">
                        <img
                            src="./images/location.png"
                            width="25px"
                            alt=""
                        />
                        </div>
                        <h5 className="mb-3 text-purple fw-bold">Our Location</h5>
                        <a
                        className="text-gray"
                        href="https://www.facebook.com/transformatics.pk/"
                        >
                        Islamabad , Pakistan
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="section-heading text-center section-spacing pb-0">
                <h6>Any questions?</h6>
                <h1>Ask a Query</h1>
                <button className="generic-btn-1 mx-auto mt-5">Contact Us</button>
            </div>
            


            </div>
        </section>
        
        <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />               
        <section className="map-wrapper   pt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.738461527261!2d73.0247101565309!3d33.71439904409346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe5971d24355%3A0xbbcc1c9edf200ce!2sAir%20University%2C%20E-9%2F4%20E-9%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2044000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705526806138!5m2!1sen!2s" width="100%" height="550" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

    </div>

  )
}
