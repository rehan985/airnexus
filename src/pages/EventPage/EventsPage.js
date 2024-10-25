import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  IslamicCompetitions, EntrepreneurialActivities, QuizCompetitions, PersonalWellbeingCompetitions, AirNexusJuniorCompetitions, SocialEvents, RoboticCompetitions, IndoorSportsCompetitions, OutdoorSportsCompetitions, ITandComputingCompetitions, MusicalCompetitions, MentalWellbeingActivities, PerformingArtsCompetitions, MedigraphyCompetitions, LiteraryCompetitions, EGamesCompetitions
} from './TabContents';
import Cards from './Cards';
import { useState } from 'react';
import { Helmet } from 'react-helmet'

export default function EventsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='event-page section-spacing pt-5'>
      <Helmet>
        <title>Events || AirTech '24</title>
        <meta name="description" content="Events hosted by Airtech '24" />
      </Helmet>
      <div className='container mt-32'>
        <div className="section-heading text-center mb-5">
          <h6>Our events</h6>
          <h1>Choose an event</h1>
        </div>

        <Box sx={{ width: '100%', bgcolor: 'background.paper', margin: 'auto' }} >
          <div className='flex justify-center items-center'>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto"
              aria-label="scrollable auto tabs example" centered>
              <Tab label="IslamicCompetitions" />
              <Tab label="EntrepreneurialActivities" />
              <Tab label="EGamesCompetitions" />
              <Tab label="LiteraryCompetitions" />

              <Tab label="MedigraphyCompetitions" />
              <Tab label="PerformingArtsCompetitions" />
              <Tab label="MentalWellbeingActivities" />
              <Tab label="MusicalCompetitions" />
              <Tab label="ITandComputingCompetitions" />
              <Tab label="OutdoorSportsCompetitions" />
              <Tab label="IndoorSportsCompetitions" />
              <Tab label="RoboticCompetitions" />
              <Tab label="SocialEvents" />
              <Tab label="AirNexusJuniorCompetitions" />
              <Tab label="PersonalWellbeingCompetitions" />

            </Tabs>
          </div>
        </Box>
        <br />
        {/* Display content based on the selected tab */}
        <div className="tab-content flex flex-wrap justify-center mt-4 gap-4">
          {/* {tabContents[value].message} */}
          {value === 0 ?

            IslamicCompetitions.map((card) => {
              return (
                <>
                  <div className="">
                    <Cards
                      title={card.title}
                      Event={card.Events}
                      image={card.imgSrc}
                      EventDetails={card.EventDetail}


                    />
                  </div>
                </>
              )
            })
            : (value === 1) ?
              EntrepreneurialActivities.map((card) => {
                return (
                  <>
                    <div className="">
                      <Cards
                        title={card.title}
                        Event={card.Events}
                        image={card.imgSrc}
                        EventDetails={card.EventDetail}
                      />

                    </div>
                  </>

                )
              }) :
              (value === 2) ?
                EGamesCompetitions.map((card) => {
                  return (
                    <>
                      <div className="">
                        <Cards
                          title={card.title}
                          Event={card.Events}
                          image={card.imgSrc}
                          EventDetails={card.EventDetail}
                        />
                      </div>
                    </>

                  )
                }) :
                (value === 3) ?
                  LiteraryCompetitions.map((card) => {
                    return (
                      <>
                        <div className="">
                          <Cards
                            title={card.title}
                            Event={card.Events}
                            image={card.imgSrc}
                            EventDetails={card.EventDetail}
                          />
                        </div>
                      </>

                    )
                  }) :
                  (value === 4) ?
                    LiteraryCompetitions.map((card) => {
                      return (
                        <>
                          <div className="">
                            <Cards
                              title={card.title}
                              Event={card.Events}
                              image={card.imgSrc}
                              EventDetails={card.EventDetail}
                            />
                          </div>
                        </>

                      )
                    }) :
                    (value === 5) ?
                      MedigraphyCompetitions.map((card) => {
                        return (
                          <>
                            <div className="">
                              <Cards
                                title={card.title}
                                Event={card.Events}
                                image={card.imgSrc}
                                EventDetails={card.EventDetail}
                              />
                            </div>
                          </>

                        )
                      }) :
                      (value === 6) ?
                        PerformingArtsCompetitions.map((card) => {
                          return (
                            <>
                              <div className="">
                                <Cards
                                  title={card.title}
                                  Event={card.Events}
                                  image={card.imgSrc}
                                  EventDetails={card.EventDetail}
                                />
                              </div>
                            </>

                          )
                        }) :
                        (value === 7) ?
                          MentalWellbeingActivities.map((card) => {
                            return (
                              <>
                                <div className="">
                                  <Cards
                                    title={card.title}
                                    Event={card.Events}
                                    image={card.imgSrc}
                                    EventDetails={card.EventDetail}
                                  />
                                </div>
                              </>

                            )
                          }) :
                          (value === 7) ?
                            MusicalCompetitions.map((card) => {
                              return (
                                <>
                                  <div className="">
                                    <Cards
                                      title={card.title}
                                      Event={card.Events}
                                      image={card.imgSrc}
                                      EventDetails={card.EventDetail}
                                    />
                                  </div>
                                </>

                              )
                            }) :
                            (value === 7) ?
                              ITandComputingCompetitions.map((card) => {
                                return (
                                  <>
                                    <div className="">
                                      <Cards
                                        title={card.title}
                                        Event={card.Events}
                                        image={card.imgSrc}
                                        EventDetails={card.EventDetail}
                                      />
                                    </div>
                                  </>

                                )
                              }) :
                              (value === 7) ?
                                OutdoorSportsCompetitions.map((card) => {
                                  return (
                                    <>
                                      <div className="">
                                        <Cards
                                          title={card.title}
                                          Event={card.Events}
                                          image={card.imgSrc}
                                          EventDetails={card.EventDetail}
                                        />
                                      </div>
                                    </>

                                  )
                                }) :
                                (value === 7) ?
                                  IndoorSportsCompetitions.map((card) => {
                                    return (
                                      <>
                                        <div className="">
                                          <Cards
                                            title={card.title}
                                            Event={card.Events}
                                            image={card.imgSrc}
                                            EventDetails={card.EventDetail}
                                          />
                                        </div>
                                      </>

                                    )
                                  }) :
                                  (value === 7) ?
                                    RoboticCompetitions.map((card) => {
                                      return (
                                        <>
                                          <div className="">
                                            <Cards
                                              title={card.title}
                                              Event={card.Events}
                                              image={card.imgSrc}
                                              EventDetails={card.EventDetail}
                                            />
                                          </div>
                                        </>

                                      )
                                    }) :
                                    (value === 7) ?
                                      SocialEvents.map((card) => {
                                        return (
                                          <>
                                            <div className="">
                                              <Cards
                                                title={card.title}
                                                Event={card.Events}
                                                image={card.imgSrc}
                                                EventDetails={card.EventDetail}
                                              />
                                            </div>
                                          </>

                                        )
                                      }) :
                                      (value === 7) ?
                                        AirNexusJuniorCompetitions.map((card) => {
                                          return (
                                            <>
                                              <div className="">
                                                <Cards
                                                  title={card.title}
                                                  Event={card.Events}
                                                  image={card.imgSrc}
                                                  EventDetails={card.EventDetail}
                                                />
                                              </div>
                                            </>

                                          )
                                        }) :



                                        (<></>)
          }

        </div>
      </div>
    </section>
  );
}