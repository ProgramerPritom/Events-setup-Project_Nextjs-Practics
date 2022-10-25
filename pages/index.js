import React, { Fragment } from 'react';
import EventList from '../component/events/EventList';
import EventSearch from '../component/events/EventSearch';
import { getFeaturedEvents } from '../dammyData';

const index = () => {
  const featuredEvents = getFeaturedEvents();
  // console.log(featuredEvents);
  return (
    <Fragment>
      <EventSearch></EventSearch>
      <EventList items={featuredEvents}></EventList>
    </Fragment>
  );
};

export default index;