import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
export default function Header() {

    let [showMenu, setShowMenu] = useState(false)
    let headerRef = useRef(null)
    let buttonRef = useRef(null)

    let handleToggle = () => {
        setShowMenu(state => !state)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {

            if (buttonRef.current.contains(event.target))
                return
            else if (showMenu && !headerRef.current.contains(event.target))
                setShowMenu(false)

        }

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);


    return (
        <>
            <header className="header header-default  " id="header">
                <div className="header-inner container flex-between ">
                    <div className="logo-wrapper ">
                        <Link to="/" className='d-flex align-items-center text-blue'>
                            <img
                                src={"/images/nexus.jpeg"}
                                width="120px"
                                alt="transformatics logo"
                                className="logo"
                            />
                            <span className="fs-2 d-inline d-md-none d-xl-inline">AirNexus '24</span>
                        </Link>
                    </div>
                    <nav className="navbar d-none d-md-flex">
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/events">Events</Link>{" "}
                        {/* <Link to="/ambassadors">Ambassadors</Link>{" "} */}
                        <Link to="/contact-us">Contact Us</Link>
                        <a className="generic-btn-1 p-2 px-3 ms-4 text-white" href='https://qrfy.io/GGUEZAt3QE'>Register Now</a>
                    </nav>
                    <button
                        className="d-flex flex-center d-md-none toggle-menu"
                        id="openMobileHeader"
                        onClick={handleToggle}
                        ref={buttonRef}
                        aria-label='Toggle navigation'
                        aria-controls="mobileMenu"
                    >
                        <img src="/images/menu.png" width="17px" alt="menu icon" />
                    </button>
                </div>
            </header>

            <header className={`header-mobile ${showMenu ? "header-mobile-show" : "header-mobile-hide"} `}
                id="mobileHeader"
                ref={headerRef}
            >
                <div className="mobile-logo-wrapper flex-between">
                    <Link to="/">
                        <img
                            src={"/images/airtech-logo.png"}
                            className="mb-0"
                            width="100px"
                            alt="transformatics logo"
                        />
                    </Link>
                    <button className="btn-none flex-center p-1" id="closeMobileHeader" onClick={handleToggle}
                        aria-controls="mobileMenu">
                        <img
                            src="/images/cancel.png"
                            className="mb-0"
                            width="22px"
                            alt="cancel button"
                        />
                    </button>
                </div>
                <nav className="header-mobile-nav pt-4">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item ">
                            <h2 className="accordion-header" id="headingOne">
                                <Link className="accordion-button collapsed" to="/" onClick={handleToggle}>
                                    Home
                                </Link>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <Link className="accordion-button collapsed" to="/about-us" onClick={handleToggle}>
                                    About Us
                                </Link>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <Link
                                    className="accordion-button collapsed"
                                    to="/events"
                                    onClick={handleToggle}
                                >
                                    Events
                                </Link>
                            </h2>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <Link
                                    className="accordion-button collapsed"
                                    to="/ambassadors"
                                    onClick={handleToggle}
                                >
                                    Ambassadors
                                </Link>
                            </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                                <Link
                                    className="accordion-button collapsed"
                                    to="/contact-us"
                                    onClick={handleToggle}
                                >
                                    Contact Us
                                </Link>
                            </h2>
                            <div
                                id="collapseSix"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
