import React from 'react'
import './Training.css'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import StatCards from '../../components/StatCards/StatCards'
import Testimonials from '../../components/Testimonials/Testimonials';

export default function Training() {
  return (
    <div className="site-wrapper trainings-page">
        <Helmet>
            <title>Trainings || Transformatics</title>
            <meta name="description" content="Trainings and courses at Transformatics" />
        </Helmet>

        <section className="choose-us section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="section-heading ">
                            <h6>Why Choose Us</h6>
                            <h1>Learn From The Best In The Industry</h1>
                        </div>
                        <div className="choose-us-content">
                            <p className="mt-5 text-gray " style={{ textAlign: "justify" }}>
                            Transformatics Pvt Ltd offers high-quality training programs and
                            IT consultancy services to bridge the gap between academia and the
                            industry. Our unique approach trains individuals on relevant tools
                            and technologies, providing in-depth understanding of the
                            industry, and making them job-ready from day one. <br /> <br /> We
                            also offer corporate training programs leading to certification
                            paths to help companies improve the skills and knowledge of their
                            staff, leading to increased productivity and a competitive edge in
                            the market.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 ps-xl-5" data-aos="fade-in" data-aos-duration={1000}>
                        <div className="choose-us-highlights d-flex align-items-center gap-3 mt-xl-5">
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-1.png" width="38px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Cutting-edge IT Training and Consultancy Services
                            </h5>
                        </div>
                        <div className="choose-us-highlights d-flex align-items-center gap-3 mt-4" data-aos="fade-in"
                        >
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-2.png" width="39px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Elevate Your Team's Skills and Productivity
                            </h5>
                        </div>
                    <div className="choose-us-highlights d-flex align-items-center gap-3 mt-4" data-aos="fade-in">
                        <div className="choose-us-rounded-wrapper ">
                        <img src="./images/choose-3.png" width="39px" alt="" />
                        </div>
                        <h5 className="text-purple fw-bold">
                        Partnerships with major Corporations
                        </h5>
                    </div>
                    </div>
                </div>
                <StatCards/>
            </div>
        </section>

        <section className="courses-showcase section-spacing">
            <div className="section-heading text-center">
                <h6>Course Categories</h6>
                <h1>Trainings We Offer</h1>
            </div>
            <div className="courses-showcase-content mt-5 container">
                <div className="courses-grid">

                    <Link
                        className="course-grid-item top-selling"
                        to="/trainings/dwh-bi"
                        >
                            <div>
                                <img
                                    src="./images/data-warehourse-logo.png"
                                    width="50px"
                                    alt=""
                                />
                                <h6 className="text-purple fw-bold fs-5">
                                    Data WareHouse &amp; Business Intelligence
                                </h6>
                                <p className="text-center text-gray">
                                    Green field implementation of a data analytics ecosystem.
                                </p>
                            </div>
                        <button className="generic-btn-1">Enroll Now</button>
                    </Link>

                    <Link className="course-grid-item" to="/trainings/data-science">
                        <div>
                            <img
                                src="./images/web-analytics-logo.png"
                                width="50px"
                                alt=""
                            />
                            <h6 className="text-purple fw-bold fs-5 ">Data Science</h6>
                            <p className="text-center text-gray">
                                Customizing models for use cases based on types of available data to
                                estimate future growth prospects
                            </p>
                        </div>
                        <button className="generic-btn-1">Enroll Now</button>
                    </Link>

                    <Link className="course-grid-item" to="/trainings/business-intelligence">
                        <div>
                            <img src="./images/bi-logo.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Business Intelligence</h6>
                            <p className="text-center text-gray">
                                Green field DWH implementation and 360° profiling of Link customer,
                                using industry standard tools.
                            </p>
                        </div>
                        <button className="generic-btn-1">Enroll Now</button>
                    </Link>

                    <Link className="course-grid-item test" to="/trainings/big-data">
                        <div>
                            <img src="./images/big-data-logo.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Big Data</h6>
                            <p className="text-center text-gray">
                                Hands on experience to build different pillars and processes of big
                                data to meet the real time.
                            </p>
                        </div>
                        <button className="generic-btn-1">Enroll Now</button>
                    </Link>

                    <Link className="course-grid-item" to={'/trainings/cloud-computing'}>
                        <div>
                            <img
                                src="./images/cloud-computing-logo.png"
                                width="50px"
                                alt=""
                            />
                            <h6 className="text-purple fw-bold fs-5">Cloud Computing</h6>
                            <p className="text-center text-gray">
                            Master the power of cloud computing with hands-on training courses in AWS, Azure, and Google Cloud
                            </p>
                        </div>
                        <button className="generic-btn-1" >
                            Enroll now
                        </button>
                    </Link>

                    <Link className="course-grid-item" to={'/corporate-trainings/power-bi'} >
                        <div>
                            <img src="./images/power-bi.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Power BI</h6>
                            <p className="text-center text-gray">
                                Elevate your data visualization skills with expert-led, hands-on Power BI training courses
                            </p>
                        </div>
                        <button className="generic-btn-1" >
                            Enroll Now
                        </button>
                    </Link>

                    <Link className="course-grid-item" to={'/corporate-trainings/microstrategy'} >
                        <div>
                            <img src="./images/microstrategy.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Microstrategy</h6>
                            <p className="text-center text-gray">
                            Master Microstrategy advanced capabilities hands-on under the supervision of any expert
                            </p>
                        </div>
                        <button className="generic-btn-1" >
                            Enroll Now
                        </button>
                    </Link>

                    <Link className="course-grid-item" to={'/corporate-trainings/odi'}>
                        <div>
                            <img src="./images/oracle-data-integrator.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Oracle data integrator</h6>
                            <p className="text-center text-gray">
                            Transform your skills from basic to advanced in hands-on ODI training
                            </p>
                        </div>
                        <button className="generic-btn-1 " >
                            Enroll Now
                        </button>
                    </Link>

                    <Link className="course-grid-item" to={'/corporate-trainings/oas'} >
                        <div>
                            <img src="./images/oracle-server.png" width="60px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Oracle Analytics Server</h6>
                            <p className="text-center text-gray">
                            Master OAS advanced capabilities hands-on under the supervision of an expert.
                            </p>
                        </div>
                        <button className="generic-btn-1 ">
                            Enroll Now
                        </button>
                    </Link>
            

                    <div className="course-grid-item">
                        <div>
                            <img src="./images/business-analytics.png" width="50px" alt="" />
                            <h6 className="text-purple fw-bold fs-5">Business analytics</h6>
                            <p className="text-center text-gray">
                            Transform your skills from basic to advanced in hands-on business analytics training
                            </p>
                        </div>
                        <button className="generic-btn-1 disabled-btn" disabled="true">
                            Coming Soon
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <Testimonials/>

    </div>

  )
}
