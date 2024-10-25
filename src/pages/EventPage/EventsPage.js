import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Helmet } from 'react-helmet';
import Cards from './Cards';

import {
  IslamicCompetitions,
  EntrepreneurialActivities,
  EGamesCompetitions,
  LiteraryCompetitions,
  MedigraphyCompetitions,
  PerformingArtsCompetitions,
  MentalWellbeingActivities,
  MusicalCompetitions,
  ITandComputingCompetitions,
  OutdoorSportsCompetitions,
  IndoorSportsCompetitions,
  RoboticCompetitions,
  SocialEvents,
  AirNexusJuniorCompetitions,
  PersonalWellbeingCompetitions
} from './TabContents';

export default function EventsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Array of competitions corresponding to each tab
  const competitions = [
    IslamicCompetitions,
    EntrepreneurialActivities,
    EGamesCompetitions,
    LiteraryCompetitions,
    MedigraphyCompetitions,
    PerformingArtsCompetitions,
    MentalWellbeingActivities,
    MusicalCompetitions,
    ITandComputingCompetitions,
    OutdoorSportsCompetitions,
    IndoorSportsCompetitions,
    RoboticCompetitions,
    SocialEvents,
    AirNexusJuniorCompetitions,
    PersonalWellbeingCompetitions
  ];

  return (
    <section className='event-page section-spacing pt-5'>
      <Helmet>
        <title>Events || AirNexus '24</title>
        <meta name="description" content="Events hosted by AirNexus '24" />
      </Helmet>
      <div className='container mt-32'>
        <div className="section-heading text-center mb-5">
          <h6>Our events</h6>
          <h1>Choose an event</h1>
        </div>

        <Box sx={{ width: '100%', bgcolor: 'background.paper', margin: 'auto' }} >
          <div className='flex justify-center items-center'>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" centered>
              <Tab label="Islamic Competitions" />
              <Tab label="Entrepreneurial Activities" />
              <Tab label="EGames Competitions" />
              <Tab label="Literary Competitions" />
              <Tab label="Medigraphy Competitions" />
              <Tab label="Performing Arts Competitions" />
              <Tab label="Mental Wellbeing Activities" />
              <Tab label="Musical Competitions" />
              <Tab label="IT and Computing Competitions" />
              <Tab label="Outdoor Sports Competitions" />
              <Tab label="Indoor Sports Competitions" />
              <Tab label="Robotic Competitions" />
              <Tab label="Social Events" />
              <Tab label="Air Nexus Junior Competitions" />
              <Tab label="Personal Wellbeing Competitions" />
            </Tabs>
          </div>
        </Box>
        <br />

        <div className="tab-content flex flex-wrap justify-center mt-4 gap-4">
          {competitions[value].map((card, index) => (
            <div key={index} className="">
              <Cards
                title={card.title}
                Event={card.Events}
                image={card.imgSrc}
                EventDetails={card.EventDetail}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
