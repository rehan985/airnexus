import React , { useEffect } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatCards() {

  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  
  useEffect( () => {
    AOS.init({ once : true });
    } , [] )

  return (
    <div className="choose-us-feature-list">
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
        <img src="./images/male-student.png" width="65px" alt="" />
        <div>
            <h1 className="mt-4 fw-bold text-purple">
            {" "}
            
            <span className="counter">
            <CountUp start={viewPortEntered ? null : 0} end={8000}>
                {({ countUpRef }) => {
                    return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                        }}
                        delayedCall
                    >
                        <span  ref={countUpRef} />
                    </VisibilitySensor>
                    );
                }}
            </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Participants</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="400">
        <img
            src="./images/online-course.png"
            width="65px"
            alt=""
        />
        <div>
            <h1 className="mt-4 fw-bold text-purple">
            <span className="counter" >
            <CountUp start={viewPortEntered ? null : 0} end={45}>
                {({ countUpRef }) => {
                    return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                        }}
                        delayedCall
                    >
                        <span  ref={countUpRef} />
                    </VisibilitySensor>
                    );
                }}
            </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Competitions</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="300">
        <img src="./images/suitcase.png" width="68px" alt="" />
        <div>
            <h1 className="mt-4 fw-bold text-purple">
            {" "}
            <span className="counter" data-target={50}>
                <CountUp start={viewPortEntered ? null : 0} end={50}>
                    {({ countUpRef }) => {
                        return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                            }}
                            delayedCall
                        >
                            <span  ref={countUpRef} />
                        </VisibilitySensor>
                        );
                    }}
                </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Universities</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
        <img src="./images/shakehand.png" width="65px" alt="" />
        <div>
            <h1 className="mt-4 fw-bold text-purple">
            {" "}
            <span className="counter" data-target={30}>
                <CountUp start={viewPortEntered ? null : 0} end={30}>
                    {({ countUpRef }) => {
                        return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                            }}
                            delayedCall
                        >
                            <span  ref={countUpRef} />
                        </VisibilitySensor>
                        );
                    }}
                </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray"> Partnerships</p>
        </div>
        </div>
    </div>
  )
}
