import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactBanner() {
    return (
        <section className="contact-us-cta section-spacing">
            <div className="contact-us-cta-inner container flex-between">
                <div>
                    <h6 className='mb-2'>LET US HELP</h6>
                    <h1>Have any Questions ? </h1>
                </div>
                <div className='d-flex align-items-center'>
                    <Link to="/contact-us" className='d-flex'>
                        Contact Us{" "}
                        <img
                            src="./images/arrow-right-blue.png"
                            className="ms-2 pb-1"
                            width="25px"

                            alt=""
                        />
                    </Link>
                    <a className="d-flex" href="tel:+923175777584">
                        {" "}
                        <img src="./images/phone-white.png" style={{ width: '25px', height: '25px', objectFit: 'contain' }} alt="" />
                        +92 317 5777584
                    </a>
                </div>
                <img
                    src="./images/shape-21.png"
                    className="contact-us-cta-img-1"
                    alt=""
                />
                <img
                    src="./images/lamp.png"
                    width="60px"
                    alt=""
                    className="floating-lamps"
                />
                <img
                    src="./images/shape-24.png"
                    className="contact-us-cta-img-2"
                    alt=""
                />
            </div>
        </section>
    )
}
